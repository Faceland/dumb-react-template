import React, {useState, useEffect} from 'react';
import './headerBar.scss'
import '../../App.scss'
import {PrimaryButton} from '../PrimaryButton/PrimaryButton'
import {LoginModal} from "../LoginModal/LoginModal";
import {Link} from "react-router-dom";

export const HeaderBar = (props) => {

    const [scrollStyle, setScrollStyle] = useState({background: 'transparent'})
    const [mobile, setMobile] = useState(window.innerHeight / window.innerWidth > 1.5)
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [burgerOpen, setBurgerState] = useState(false);

    window.onscroll = function () {
        if (!props.fancy || mobile) return
        setScrollStyle(window.pageYOffset < 10 ? {background: 'transparent'} : {background: 'white'});
    }

    window.onresize = function () {
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

    const toggleBurger = () => {
        setBurgerState(!burgerOpen);
        console.log("oh boy 1 krabby patty coming right up")
    }

    const burger = (
        <div className="burgerNav">
            <ul>
                <li><Link className="floatingButton" to="/">Home</Link></li>
                <li><Link className="floatingButton" to="/about">Meme</Link></li>
                <li><Link className="floatingButton" to="/topics">Dreams</Link></li>
                <li><Link className="floatingButton" to="/topics">Profile</Link></li>                   
            </ul>
        </div>
    )

    const mobileHeader = (
        <div className="headerBar" style={{background: 'white', transition: 'none'}}>
            <div className="logo">
                <img className="logo mx-1"
                     src="https://hamiltonrising.com/wp-content/uploads/2018/09/website-logo-png.png"
                     alt="FREE SLIMEYS DE"/>
                <div/>
            </div>
            <div>
                <PrimaryButton className="mx-2" onClick={openModal}>Log In</PrimaryButton>
                <i className="fa fa-bars" onClick={toggleBurger}></i>
            </div>
        </div>
    )

    const desktopHeader = (
        <div className="headerBar" style={props.fancy ? scrollStyle : {background: 'white'}}>
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
        <div>
            {mobile ? mobileHeader : desktopHeader}
            {burgerOpen ? burger : null}
            <LoginModal isOpen={loginModalOpen} close={closeModal}/>
        </div>
    )
}