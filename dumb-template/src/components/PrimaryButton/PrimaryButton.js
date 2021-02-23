import React from "react";
import '../../App.scss'
import './primaryButton.scss'

export const PrimaryButton = (props) => {
    return (
        <button onClick={props.onClick} className="primaryButton standardShadow theme-primary mx-1 drop-shadow">
            {props.children}
        </button>
    );
}