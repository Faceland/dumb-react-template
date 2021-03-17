import React, {useContext, useEffect} from "react";
import {Context} from "../Store";

export const MobileStateHandler = () => {

    const [state, dispatch] = useContext(Context);

    window.onresize = function () {
        dispatch({type: 'SET_MOBILE_MODE', payload: window.screen.height / window.screen.width > 1.5})
    }

    useEffect(() => {
        dispatch({type: 'SET_MOBILE_MODE', payload: window.screen.height / window.screen.width > 1.5})
    }, []);

    return <div/>
}