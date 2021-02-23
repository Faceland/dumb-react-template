import React, {useState, useEffect} from 'react';
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
            setScrollStyle({background: 'white'})
            prevScrollpos = currentScrollPos;
        }
    }

    return (
        <div className="headerBar" style={scrollStyle}>
            <div className="logo">
                <img className="logo mx-1"
                     src="https://hamiltonrising.com/wp-content/uploads/2018/09/website-logo-png.png"
                     alt="FREE SLIMEYS DE"/>
                <p>Gaming</p>
                <div/>
                <button className="floatingButton">Dank</button>
                <button className="floatingButton">Meme</button>
                <button className="floatingButton">Dreams</button>
            </div>
            <div className="profileSection">
                <button className="floatingButton">Profile</button>
                <PrimaryButton>Log In</PrimaryButton>
            </div>
        </div>
    )
}