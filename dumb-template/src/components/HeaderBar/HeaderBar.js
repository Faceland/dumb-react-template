import * as React from "react";
import './headerBar.scss'

class HeaderBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="headerBar">
                <img className="logo mx-1" alt="aaaaaaaaaah your logo goes here"/>
                <button className="login-button mx-1">Log In</button>
            </div>    
        )
    }

}

export default HeaderBar