import React from "react";
import '../../App.scss'
import './primaryButton.scss'

export const PrimaryButton = (props) => {
    return (
        <button className="primaryButton mx-1 drop-shadow">
            {props.children}
        </button>
    );
}