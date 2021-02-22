import * as React from "react";
import './copyWidget.scss'

class CopyWidget extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="copyButton">
                <span>🗎</span>
                <span className="divider"/>
                <span>MC.ADDRESS.WHATEVER</span>
            </div>
        );
    }

}

export default CopyWidget