import React from "react";
import './bodyPanel.scss'

export const BodyPanel = (props) => {

    return (
        <div className="basicPanel">
            {props.children}
        </div>
    );
}