import React, { useState, useEffect } from 'react';
import './PlayersOnlineBanner.scss'

export const PlayersOnlineBanner = (props) => {

    const [playersOnline, setPlayersOnline] = useState(42069);

    useEffect(() => {
        fetch("https://api.mcsrvstat.us/2/199.127.61.235:25566")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("result", result)
                    setPlayersOnline(result?.players.online)
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log("Failed to get player online", error)
                }
            )
    });

    return (
        <div className="playersOnlineBanner">
            <p>Wow! there are {playersOnline} gamers GAMING!</p>
        </div>
    );
}