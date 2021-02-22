import * as React from "react";
import './headerBar.scss'
import '../../App.scss'
import {PrimaryButton} from '../PrimaryButton/PrimaryButton'

class HeaderBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="headerBar">
                <img className="logo mx-1" alt="aaaaaaaaaah your logo goes here"/>
                <PrimaryButton>Log In</PrimaryButton>
            </div>    
        )
    }

}

export default HeaderBar