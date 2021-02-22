import React from "react";
import './copyWidget.scss'

export const CopyWidget = () => {

    return (
        <div className="copyButton">
            <span>🗎</span>
            <span className="divider"/>
            <span>MC.ADDRESS.WHATEVER</span>
        </div>
    );
}