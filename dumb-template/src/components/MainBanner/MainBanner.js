import React from "react";
import './mainBanner.scss'
import {CopyWidget} from "../CopyWidget/CopyWidget";

export const MainBanner = () => {

    return (
        <div className="mainBanner">
            <video className="videoBg" playsInline autoPlay muted loop
                   src="https://webmshare.com/download/GxM6A"
                   poster="https://www.wallpapertip.com/wmimgs/2-27681_minecraft-wallpaper-4k-pc.jpg"
            >
                NO VIDEO 4 U
            </video>
            <div className="bannerTitle">JET FUEL</div>
            <div className="bannerSubtitle">can't melt steel beems</div>
            <CopyWidget/>
        </div>
    )

}