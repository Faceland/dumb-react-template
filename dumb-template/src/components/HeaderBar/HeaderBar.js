import * as React from "react";
import './headerBar.scss'
import "../../App.scss"

class HeaderBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="headerBar">
                <img className="logo mx-1" alt="aaaaaaaaaah your logo goes here"/>
                <button className="login-button mx-1 theme-primary box-shadow">Log In</button>
            </div>    
        )
    }

}

export default HeaderBar