import React from "react";
import {useAuth0} from "@auth0/auth0-react";

export const AuthButton = () => {

    const {loginWithRedirect} = useAuth0();

    return <button
        className="floatingButton theme-primary"
        onClick={() => loginWithRedirect("http://localhost:3000")}>
        Log In
    </button>;
};