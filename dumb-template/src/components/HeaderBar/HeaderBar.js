import React, {useState, useContext} from 'react';
import './headerBar.scss'
import '../../App.scss'
import {PrimaryButton} from '../PrimaryButton/PrimaryButton'
import {Link} from "react-router-dom";
import {AuthButton} from "../AuthButton/AuthButton";
import {useAuth0} from "@auth0/auth0-react";
import {ProfileModal} from "../Modal/ProfileModal/ProfileModal";
import {Context} from "../../Store";

export const HeaderBar = (props) => {

    const [state] = useContext(Context);

    const [scrollStyle, setScrollStyle] = useState({background: 'transparent'})
    const [profileOpen, setProfileOpen] = useState(false);
    const [burgerOpen, setBurgerState] = useState(false);
    const {isAuthenticated} = useAuth0();

    window.onscroll = function () {
        if (!props.fancy || state.mobile) return
        setScrollStyle(window.pageYOffset < 10 ? {background: 'transparent'} : {background: 'white'});
    }

    const openModal = () => {
        setProfileOpen(true);
        console.log("open!")
    }

    const closeModal = () => {
        setProfileOpen(false);
        console.log("closed!")
    }

    const toggleBurger = () => {
        setBurgerState(!burgerOpen);
        console.log("oh boy 1 krabby patty coming right up")
    }

    const loginButton = (
        <AuthButton className="theme-primary floatingButton shadow-normal mx-1"/>
    )

    const profileButton = (
        <PrimaryButton onClick={openModal}>Profile</PrimaryButton>
    )

    const burger = (
        <div className="burgerContainer" onClick={toggleBurger}>
            <div className="burgerNav">
                <Link to="/">Home</Link>
                <Link to="/about">Item Searcher</Link>
                <Link to="/topics">Dreams</Link>
                <Link to="/topics">Profile</Link>
                <Link to="/topics">Buy Gems</Link>
            </div>
        </div>
    )

    const mobileHeader = (
        <div className="headerBar" style={{background: 'white', transition: 'none'}}>
            <div className="logo mx-1">
                <a href="/">
                    <img
                        src="https://i.imgur.com/FSMeukV.png"
                        alt="Website Img"/>
                </a>
                <div/>
            </div>
            <div>
                {isAuthenticated ? profileButton : loginButton}
                <i className="fa fa-bars" onClick={toggleBurger}/>
            </div>
        </div>
    )

    const desktopHeader = (
        <div className="headerBar shadow-normal" style={props.fancy ? scrollStyle : {background: 'white'}}>
            <div className="logo mx-1">
                <a href="/">
                    <img
                        src="https://i.imgur.com/FSMeukV.png"
                        alt="Website Img"/>
                </a>
                <div/>
                <Link className="floatingButton theme-white" to="/">Home</Link>
                <Link className="floatingButton theme-white" to="/about">Item Searcher</Link>
                <Link className="floatingButton theme-white" to="/topics">Dreams</Link>
            </div>
            <div className="profileSection">
                <Link className="gemButton" to="/topics">
                    <span className="gemDisplay">42069 Gems</span>
                    <span className="buyGems">Get More</span>
                </Link>
                {isAuthenticated ? profileButton : loginButton}
            </div>
        </div>
    )

    return (
        <div>
            {state.mobile ? mobileHeader : desktopHeader}
            {burgerOpen ? burger : null}
            <ProfileModal isOpen={profileOpen} close={closeModal}/>
        </div>
    )
}