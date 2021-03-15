import React, {useState} from "react";
import useSound from "use-sound";

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
        }, 100)
    }


    if (life < 1) {
        return <></>;
    }

    return (
        <img
            className={`buddy ${shake ? "hitShake" : ""}`}
            src="https://i.imgur.com/2kT4dcX.png"
            alt="facebuddy"
            onClick={() => {
                doShake()
                playSound();
                setLife(life - 1);
            }}
        />
    );
}