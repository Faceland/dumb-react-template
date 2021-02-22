import React from "react";
import './mainBanner.scss'
import {CopyWidget} from "../CopyWidget/CopyWidget";

export const MainBanner = () => {

    return (
        <div className="mainBanner">
            <video className="videoBg" playsInline autoPlay muted loop src="https://s1.webmshare.com/yNvno.webm"/>
            <div className="bannerTitle">JET FUEL</div>
            <div className="bannerSubtitle">can't melt steel beems</div>
            <CopyWidget/>
        </div>
    )

}