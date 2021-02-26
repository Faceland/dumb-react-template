import './App.scss';

import React, {useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useRouteMatch, useParams
} from "react-router-dom";
import Store from './Store'

import {Row, Col} from 'react-flexbox-grid';
import {BodyPanel} from "./components/BodyPanel/BodyPanel";
import {MainBanner} from "./components/MainBanner/MainBanner";
import {PlayersOnlineBanner} from "./components/PlayersOnlineBanner/PlayersOnlineBanner";
import {HeaderBar} from "./components/HeaderBar/HeaderBar";
import {Footer} from "./components/Footer/Footer";
import {Auth0Provider} from "@auth0/auth0-react";
import {MobileStateHandler} from "./components/MobileStateHandler";

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

function Home() {
    return (
        <div className="App">
            <HeaderBar fancy={true}/>
            <MainBanner/>
            <PlayersOnlineBanner/>
            <div className="bodySection">
                <div className="bodyPadding">
                    <Row>
                        <BodyPanel>
                            <Row>
                                <Col md>
                                    <div className="fullSize">
                                        <img
                                            src="https://media1.tenor.com/images/bbb92fe330c082c0d289da72fb2277bc/tenor.gif?itemid=17592134"
                                            alt="horse hours"/>
                                    </div>
                                </Col>
                                <Col md>
                                    <p className="bodyTitle">GENERIC TITLE</p>
                                    <div>According to all known laws of aviation, there is no way a bee should be able
                                        to
                                        fly. Its wings are too small to get its fat little body off the ground. The bee,
                                        of
                                        course, flies anyway because bees don't care what humans think is impossible.
                                        Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and
                                        yellow!
                                        Let's shake it up a little. Barry! Breakfast is ready! Ooming! Hang on a second.
                                        Hello? - Barry? - Adam? - Oan you believe this is happening? - I can't. I'll
                                        pick
                                        you up. Looking sharp. Use the stairs. Your father paid good money for those.
                                        Sorry.
                                        I'm excited. Here's the graduate. We're very proud of you, son. A perfect report
                                        card, all B's. Very proud. Ma! I got a thing going here. - You got lint on your
                                        fuzz. - Ow! That's me! - Wave to us! We'll be in row 118,000. - Bye! Barry, I
                                        told
                                        you, stop flying in the house! - Hey, Adam. - Hey, Barry. - Is that fuzz gel? -
                                        A
                                        little. Special day, graduation. Never thought I'd make it. Three days grade
                                        school,
                                        three days high school. Those were awkward. Three days college. I'm glad I took
                                        a
                                        day and hitchhiked around the hive. You did come back different.
                                    </div>
                                </Col>
                            </Row>
                        </BodyPanel>
                    </Row>
                    <Row>
                        <BodyPanel>
                            <Row>
                                <Col md>
                                    <p className="bodyTitle">HOLY FUCK</p>
                                    <div>According to all known laws of aviation, there is no way a bee should be able
                                        to
                                        fly. Its wings are too small to get its fat little body off the ground. The bee,
                                        of
                                        course, flies anyway because bees don't care what humans think is impossible.
                                        Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and
                                        yellow!
                                        Let's shake it up a little. Barry! Breakfast is ready! Ooming! Hang on a second.
                                        Hello? - Barry? - Adam? - Oan you believe this is happening? - I can't. I'll
                                        pick
                                        you up. Looking sharp. Use the stairs. Your father paid good money for those.
                                        Sorry.
                                        I'm excited. Here's the graduate. We're very proud of you, son. A perfect report
                                        card, all B's. Very proud. Ma! I got a thing going here. - You got lint on your
                                        fuzz. - Ow! That's me! - Wave to us! We'll be in row 118,000. - Bye! Barry, I
                                        told
                                        you, stop flying in the house! - Hey, Adam. - Hey, Barry. - Is that fuzz gel? -
                                        A
                                        little. Special day, graduation. Never thought I'd make it. Three days grade
                                        school,
                                        three days high school. Those were awkward. Three days college. I'm glad I took
                                        a
                                        day and hitchhiked around the hive. You did come back different.
                                    </div>
                                </Col>
                                <Col md>
                                    <div className="fullSize">
                                        <img src="https://i.imgur.com/vSD8DGq.gif" alt="regretz"/>
                                    </div>
                                </Col>
                            </Row>
                        </BodyPanel>
                    </Row>
                    <Row>
                        <BodyPanel>
                            <Row>
                                <Col md>
                                    <div className="fullSize">
                                        <img src="https://i.imgur.com/vSD8DGq.gif" alt="regretz"/>
                                    </div>
                                </Col>
                                <Col md>
                                    <p className="bodyTitle">NO FRIGGIN WAY</p>
                                    <div>According to all known laws of aviation, there is no way a bee should be able
                                        to
                                        fly. Its wings are too small to get its fat little body off the ground. The bee,
                                        of
                                        course, flies anyway because bees don't care what humans think is impossible.
                                        Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and
                                        yellow!
                                        Let's shake it up a little. Barry! Breakfast is ready! Ooming! Hang on a second.
                                        Hello? - Barry? - Adam? - Oan you believe this is happening? - I can't. I'll
                                        pick
                                        you up. Looking sharp. Use the stairs. Your father paid good money for those.
                                        Sorry.
                                        I'm excited. Here's the graduate. We're very proud of you, son. A perfect report
                                        card, all B's. Very proud. Ma! I got a thing going here. - You got lint on your
                                        fuzz. - Ow! That's me! - Wave to us! We'll be in row 118,000. - Bye! Barry, I
                                        told
                                        you, stop flying in the house! - Hey, Adam. - Hey, Barry. - Is that fuzz gel? -
                                        A
                                        little. Special day, graduation. Never thought I'd make it. Three days grade
                                        school,
                                        three days high school. Those were awkward. Three days college. I'm glad I took
                                        a
                                        day and hitchhiked around the hive. You did come back different.
                                    </div>
                                </Col>
                            </Row>
                        </BodyPanel>
                    </Row>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

function About() {
    return (
        <div className="App">
            <HeaderBar fancy={false}/>
            <div className="basicPage">
                aaaaaaaaa
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
