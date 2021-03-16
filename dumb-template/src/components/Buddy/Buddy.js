import React, {useEffect, useState, useRef} from "react";
import useSound from "use-sound";

import './buddy.scss'
import boopSfx from '../../sounds/Player_hurt1.ogg';

export const Buddy = () => {

    const [life, setLife] = useState(Math.random() < 0.05 ? 5 : 0);
    const [shake, setShake] = useState(false)

    const [play] = useSound(boopSfx);

    const [x, setX] = useState()
    const [y, setY] = useState()
    const [hitMarkers, setHitMarkers] = useState([]);

    let shakeTimeout;
    let hitTimer;

    useEffect(() => {
        tickMarkers()
        return () => {
            hitTimer && clearTimeout(hitTimer);
            setHitMarkers([])
        };
    }, [setHitMarkers]);

    useEffect(() => {
            const update = (e) => {
                setX(e.x)
                setY(e.y)
            }
            window.addEventListener('mousemove', update)
            window.addEventListener('touchmove', update)
            return () => {
                window.removeEventListener('mousemove', update)
                window.removeEventListener('touchmove', update)
            }
        }, [setX, setY]
    )

    const markerRef = useRef(hitMarkers);
    markerRef.current = hitMarkers;

    const tickMarkers = () => {
        if (markerRef.current.length === 0 && life === 0) {
            return
        }
        hitTimer = setTimeout(() => {
            if (markerRef.current.length > 0) {
                let newValues = []
                markerRef.current.forEach(newMarker => {
                    if (newMarker.lifespan > 0) {
                        newMarker.x = newMarker.x + newMarker.xVelocity;
                        newMarker.y = newMarker.y + newMarker.yVelocity;
                        newMarker.yVelocity = newMarker.yVelocity + 0.4;
                        newMarker.lifespan--;
                        newValues.push(newMarker);
                    }
                });
                setHitMarkers(newValues)
            }
            tickMarkers()
        }, 10)
    }

    const playSound = () => {
        play();
    };

    const doShake = () => {
        setShake(true)
        shakeTimeout && clearTimeout(shakeTimeout);
        shakeTimeout = setTimeout(() => {
            setShake(false);
        }, 100)
    }

    const createHitMarker = (id) => {
        const hitMarker = {id: id};
        hitMarker.lifespan = 40;
        hitMarker.x = x;
        hitMarker.y = y;
        hitMarker.xVelocity = 10 * (-0.5 + Math.random());
        hitMarker.yVelocity = -2 - 4 * Math.random();
        hitMarker.text = 8 + Math.floor(Math.random() * Math.floor(22))

        const newMarkers = hitMarkers;
        newMarkers.push(hitMarker);
        setHitMarkers(newMarkers);
        console.log(hitMarkers)
    }

    if (life < 1) {
        return (
            <div>
                {hitMarkers.map((marker, index) =>
                    <div
                        id={`marker-${marker.id}`}
                        key={`marker-${marker.id}`}
                        className="hit-marker"
                        style={{
                            top: marker.y,
                            left: marker.x
                        }}>
                        {marker.text}
                    </div>
                )}
            </div>
        )
    }

    return (
        <div>
            {hitMarkers.map((marker, index) =>
                <div
                    id={`marker-${marker.id}`}
                    key={`marker-${marker.id}`}
                    className="hit-marker"
                    style={{
                        top: marker.y,
                        left: marker.x
                    }}>
                    {marker.text}
                </div>
            )}
            <img
                className={`buddy ${shake ? "hitShake" : ""}`}
                src="https://i.imgur.com/2kT4dcX.png"
                alt="facebuddy"
                onClick={() => {
                    doShake()
                    createHitMarker(life)
                    playSound();
                    setLife(life - 1);
                }}
            />
        </div>
    );
}