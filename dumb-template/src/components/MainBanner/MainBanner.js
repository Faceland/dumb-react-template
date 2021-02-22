import React from "react";
import './mainBanner.scss'
import {CopyWidget} from "../CopyWidget/CopyWidget";

export const MainBanner = () => {

    return (
        <div className="mainBanner">
            <div className="bannerTitle">JET FUEL</div>
            <div className="bannerSubtitle">can't melt steel beems</div>
            <CopyWidget/>
        </div>
    )

}