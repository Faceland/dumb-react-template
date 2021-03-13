import React, {useState} from "react";
import './copyWidget.scss'
import "../Tooltip/tooltip.scss"

export const CopyWidget = () => {

    const [copyText, setCopyText] = useState("Click To Copy!");
    let timeout;

    const copyTransition = () => {
        timeout && clearTimeout(timeout);
        setCopyText("Copied!")
        timeout = setTimeout(() => {
            setCopyText("Click To Copy!");
        }, 2000);
    }

    return (
        <div
            className="copyButton shadow-normal theme-primary"
            onClick={copyTransition}
            data-tooltip={copyText}
        >
            <span>🗎</span>
            <span className="divider"/>
            <span>MC.ADDRESS.WHATEVER</span>
        </div>
    );
}