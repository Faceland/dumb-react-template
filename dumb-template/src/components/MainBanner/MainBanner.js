import * as React from "react";
import './mainBanner.scss'

class MainBanner extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mainBanner">
                <div className="bannerTitle">JET FUEL</div>
                <div className="bannerSubtitle">can't melt steel beems</div>
            </div>
        )
    }

}

export default MainBanner