import React, {useState, useEffect} from 'react';
import './headerBar.scss'
import '../../App.scss'
import {PrimaryButton} from '../PrimaryButton/PrimaryButton'

export const HeaderBar = () => {

    const [scrollStyle, setScrollStyle] = useState({background: 'transparent'})
    const [mobile, setMobile] = useState(window.visualViewport.height / window.visualViewport.width > 2.2)

    window.onscroll = function () {
        setScrollStyle(window.pageYOffset < 10 ? {background: 'transparent'} : {background: 'white'});
    }

    window.onresize = function() {
        setMobile(window.visualViewport.height / window.visualViewport.width > 2.2)
    }

    const mobileHeader = (
        <div className="headerBar" style={scrollStyle}>
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

    return (
        <div className="headerBar" style={scrollStyle}>
            {mobile ? mobileHeader : desktopHeader}
        </div>
    )
}