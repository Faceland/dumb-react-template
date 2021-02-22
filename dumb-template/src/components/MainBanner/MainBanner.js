import React from "react";
import './mainBanner.scss'
import {CopyWidget} from "../CopyWidget/CopyWidget";

export const MainBanner = () => {

    return (
        <div className="mainBanner">
            <video className="videoBg" playsInline autoPlay muted loop
                   src="https://www.videovor.com/download/?token=598a068536f41483ec6bbc8aa6af9649de9b0017&vk=h0tAOQIKEbMjM3ldzFlXvLGzmgM3rW4xTINpu80OHkk&fn=Donald+Trump+-+Never+Come+Down+%28Original%29"
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