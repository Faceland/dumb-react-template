import React, {useState} from "react";
import './copyWidget.scss'
import "../Tooltip/tooltip.scss"

export const CopyWidget = () => {

    var IP = "MC.ADDRESS.WHATEVER"
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
            onClick={() => {
                copyTransition();
                navigator.clipboard.writeText(IP);
            }}
            data-tooltip={copyText}
        >
            <span>🗎</span>
            <span className="divider"/>
            <span>{IP}</span>
        </div>
    );
}