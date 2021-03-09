import './App.scss';

import React, {useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useRouteMatch, useParams
} from "react-router-dom";
import Store from './Store'

import {HeaderBar} from "./components/HeaderBar/HeaderBar";
import {Footer} from "./components/Footer/Footer";
import {Auth0Provider} from "@auth0/auth0-react";
import {MobileStateHandler} from "./components/MobileStateHandler";
import {ShuffleCollection} from "./components/Shuffle/ShuffleCollection";
import {Home} from "./pages/Home/Home";

function App() {

    return (
        <Auth0Provider
            domain="dev-v-l-v252.us.auth0.com"
            clientId="QhYPNu2AYQmUgEdgVmRMTEigba8asNBG"
            redirectUri={window.location.origin}
        >
            <Router>
                <Store>
                    <MobileStateHandler/>
                    <Switch>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/topics">
                            <Topics/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </Store>
            </Router>
        </Auth0Provider>
    );
}

function About() {
    return (
        <div className="App">
            <HeaderBar fancy={false}/>
            <div className="basicPage" style={{marginTop: "50px"}}>
                <ShuffleCollection/>
            </div>
            <Footer/>
        </div>
    )
}

function Topics() {
    let match = useRouteMatch();

    return (
        <div className="App">
            <HeaderBar fancy={false}/>
            <div className="basicPage">
                <ul>
                    <li>
                        <Link to={`${match.url}/components`}>Components</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/props-v-state`}>
                            Props v. State
                        </Link>
                    </li>
                </ul>

                {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
                <Switch>
                    <Route path={`${match.path}/:topicId`}>
                        <Topic/>
                    </Route>
                    <Route path={match.path}>
                        <h3>Please select a topic.</h3>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

function Topic() {
    let {topicId} = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
}

export default App;
