import React, {useState} from "react";
import './buddy.scss'
import useSound from "use-sound";
import boopSfx from '../../sounds/Player_hurt1.ogg';

export const Buddy = () => {

    const [life, setLife] = useState(1);
    const [play] = useSound(boopSfx);

    const playSound = () => {
        play();
    };

    if (life < 1) {
        return <></>;
    }

    return (
        <img
            className="buddy"
            src="https://i.imgur.com/2kT4dcX.png"
            alt="facebuddy"
            onClick={() => {
                playSound();
                setLife(life - 1);
            }}
        />
    );
}