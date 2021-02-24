import React, {useState, useEffect} from 'react';
import './headerBar.scss'
import '../../App.scss'
import {PrimaryButton} from '../PrimaryButton/PrimaryButton'
import {LoginModal} from "../LoginModal/LoginModal";
import {Link} from "react-router-dom";

export const HeaderBar = (fancy) => {

    const [scrollStyle, setScrollStyle] = useState({background: 'transparent'})
    const [mobile, setMobile] = useState(window.innerHeight / window.innerWidth > 1.5)
    const [loginModalOpen, setLoginModalOpen] = useState(false);

    window.onscroll = function () {
        if (!fancy) return
        setScrollStyle(window.pageYOffset < 10 ? {background: 'transparent'} : {background: 'white'});
    }

    window.onresize = function() {
        setMobile(window.innerHeight / window.innerWidth > 1.5)
    }

    const openModal = () => {
        setLoginModalOpen(true);
        console.log("open!")
    }

    const closeModal = () => {
        setLoginModalOpen(false);
        console.log("closed!")
    }

    const mobileHeader = (
        <div className="headerBar" style={fancy ? scrollStyle : {background: 'white'}}>
            <div className="logo">
                <img className="logo mx-1"
                     src="https://hamiltonrising.com/wp-content/uploads/2018/09/website-logo-png.png"
                     alt="FREE SLIMEYS DE"/>
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

    const desktopHeader = (
        <div className="headerBar" style={scrollStyle}>
            <div className="logo">
                <img className="logo mx-1"
                     src="https://hamiltonrising.com/wp-content/uploads/2018/09/website-logo-png.png"
                     alt="FREE SLIMEYS DE"/>
                <p>Gaming</p>
                <div/>
                <Link className="floatingButton" to="/">Home</Link>
                <Link className="floatingButton" to="/about">Meme</Link>
                <Link className="floatingButton" to="/topics">Dreams</Link>
            </div>
            <div className="profileSection">
                <Link className="floatingButton" to="/topics">Profile</Link>
                <PrimaryButton onClick={openModal}>Log In</PrimaryButton>
            </div>
        </div>
    )

    return (
        <div className="headerBar" style={scrollStyle}>
            {mobile ? mobileHeader : desktopHeader}
            <LoginModal isOpen={loginModalOpen} close={closeModal}/>
        </div>
    )
}