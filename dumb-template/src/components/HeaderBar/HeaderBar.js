import React, { useState, useEffect } from 'react';
import './headerBar.scss'
import '../../App.scss'
import {PrimaryButton} from '../PrimaryButton/PrimaryButton'


export const HeaderBar = () => {

    const [scrollStyle, setScrollStyle] = useState({background: 'transparent'})
    let prevScrollpos = window.pageYOffset;

    window.onscroll = function () {
        const currentScrollPos = window.pageYOffset;
        if (currentScrollPos < 10) {
            setScrollStyle({background: 'transparent'})
        } else {
            setScrollStyle({background: '#316adb'})
            prevScrollpos = currentScrollPos;
        }
    }

    return (
        <div className="headerBar" style={scrollStyle}>
            <div className="logo">
                <img className="logo mx-1" src="https://i.imgur.com/donLOsM.gif" alt="FREE SLIMEYS DE"/>
                <p>Gaming</p>
            </div>
            <PrimaryButton>Log In</PrimaryButton>
        </div>
    )
}