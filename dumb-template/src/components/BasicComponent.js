import * as React from "react";

class BasicComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color: "red"};
    }

    render() {
        return <h2>I am a component!</h2>;
    }
}

export default BasicComponent