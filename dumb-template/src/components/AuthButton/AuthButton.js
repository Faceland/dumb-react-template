import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const AuthButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <button className="floatingButton" onClick={() => loginWithRedirect()}>Log In</button>;
};