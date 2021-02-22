import * as React from "react";
import './basicComponent.scss'

class BasicComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color: "red"};
    }

    render() {
        return (
            <div className="basicStyle">I am a component!</div>
        )
    }

}

export default BasicComponent