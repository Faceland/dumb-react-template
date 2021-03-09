import React, {useContext} from "react";
import {HeaderBar} from "../../components/HeaderBar/HeaderBar";
import {MainBanner} from "../../components/MainBanner/MainBanner";
import {PlayersOnlineBanner} from "../../components/PlayersOnlineBanner/PlayersOnlineBanner";
import {Col, Row} from "react-flexbox-grid";
import {Footer} from "../../components/Footer/Footer";
import {BodyPanel} from "../../components/BodyPanel/BodyPanel";
import {Context} from "../../Store";

import './home.scss'

export const Home = (props) => {

    const [state, dispatch] = useContext(Context);

    const homeImageOne = (
        <Col md>
            <div className="fullSize">
                <img
                    src="https://media1.tenor.com/images/bbb92fe330c082c0d289da72fb2277bc/tenor.gif?itemid=17592134"
                    alt="horse hours"/>
            </div>
        </Col>
    )

    const homeImageTwo = (
        <Col md>
            <div className="fullSize">
                <img src="https://i.imgur.com/vSD8DGq.gif" alt="regretz"/>
            </div>
        </Col>
    )

    const homeImageThree = (
        <Col md>
            <div className="fullSize">
                <img src="https://i.imgur.com/vSD8DGq.gif" alt="regretz"/>
            </div>
        </Col>
    )

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
                                {homeImageOne}
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
                                {state.mobile && homeImageTwo}
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
                                {!state.mobile && homeImageTwo}
                            </Row>
                        </BodyPanel>
                    </Row>
                    <Row>
                        <BodyPanel>
                            <Row>
                                {homeImageThree}
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