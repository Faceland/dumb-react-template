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
                <div className="logo">
                    <img className="logo mx-1" src="https://i.imgur.com/donLOsM.gif" alt="FREE SLIMEYS DE"/>
                    <p>Gaming</p>
                </div>
                <PrimaryButton>Log In</PrimaryButton>
            </div>
        )
    }

}

export default HeaderBar