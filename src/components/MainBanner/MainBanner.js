import React, {useContext} from "react";
import './mainBanner.scss'
import {CopyWidget} from "../CopyWidget/CopyWidget";
import {Context} from '../../Store'

export const MainBanner = () => {

    const [state] = useContext(Context);

    return (
        <div className="mainBanner" style={state.mobile ? {marginTop: '50px'} : {marginTop: '0'}}>
            <video className="videoBg" style={state.mobile ? {top: '50px'} : {top: '0'}} playsInline autoPlay muted loop
                   src="https://youdieifyou.work/files/lliklhyqqtzs.mp4"
                   poster="https://www.wallpapertip.com/wmimgs/2-27681_minecraft-wallpaper-4k-pc.jpg"
            >
                background video
            </video>
            <img
                className={state.mobile ? "mobileBannerTitle" : "desktopBannerTitle"}
                src="https://i.imgur.com/EOXkN9z.png"
                alt="Website Img"/>
            <CopyWidget/>
        </div>
    )

}