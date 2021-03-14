import React, {useState} from "react";
import useSound from "use-sound";
import { Shake } from 'reshake'

import './buddy.scss'
import boopSfx from '../../sounds/Player_hurt1.ogg';

export const Buddy = () => {

    const [life, setLife] = useState(5);
    const [shake, setShake] = useState(false)
    const [play] = useSound(boopSfx);
    let shakeTimeout;

    const playSound = () => {
        play();
    };

    const doShake = () => {
        setShake(true)
        shakeTimeout && clearTimeout(shakeTimeout);
        shakeTimeout = setTimeout(() => {
            setShake(false);
        }, 250)
    }


    if (life < 1) {
        return <></>;
    }

    return (
        <Shake
            h={5}
            v={5}
            r={3}
            dur={300}
            int={10}
            max={100}
            fixed={false}
            fixedStop={false}
            freez={false}
            active={shake}>
            <img
                className="buddy"
                src="https://i.imgur.com/2kT4dcX.png"
                alt="facebuddy"
                onClick={() => {
                    doShake()
                    playSound();
                    setLife(life - 1);
                }}
            />
        </Shake>
    );
}