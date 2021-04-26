import './App.scss';

import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useRouteMatch, useParams
} from "react-router-dom";
import Store from './Store'

import {HeaderBar} from "./components/HeaderBar/HeaderBar";
import {Footer} from "./components/Footer/Footer";
import {MobileStateHandler} from "./components/MobileStateHandler";
import {ShuffleCollection} from "./components/Shuffle/ShuffleCollection";
import {Home} from "./pages/Home/Home";
import {DiscordWidget} from "./components/DiscordWidget/DiscordWidget"
import {Gems} from "./pages/Gems/Gems";
import {ProtectedRoute} from "./components/ProtectedRoute";
import {AuthProviderWithHistory} from "./components/AuthProviderWithHistory/AuthProviderWithHistory";

function App() {

    return (
        <AuthProviderWithHistory>
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
                        <ProtectedRoute path="/gems" component={Gems}/>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </Store>
            </Router>
        </AuthProviderWithHistory>
    );
}

function About() {
    return (
        <div className="App">
            <HeaderBar fancy={false}/>
            <div className="basicPage" style={{marginTop: "50px"}}>
                <ShuffleCollection/>
            </div>
            <DiscordWidget/>
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
