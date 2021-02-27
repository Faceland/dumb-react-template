import React, {useState, useEffect} from "react";
import {Row, Col} from 'react-flexbox-grid';
import "./Shuffle.scss"

export const ShuffleCollection = (props) => {

    const [items, setItems] = useState([
        {name: "option1", example: "meme", data2: "not null"},
        {name: "option2", example: "meme", data2: "not null"},
        {name: "option3", example: "meme", data2: "fuk"},
        {name: "option4", example: "meme", data2: "fuk"},
        {name: "option5", example: "meme", data2: "fuk"},
        {name: "option6", example: "not-meme", data2: "fuk"}
    ])
    const [filteredItems, setFilteredItems] = useState([])
    const [filter, setFilter] = useState({example: "meme", data2: "fuk"})

    useEffect(() => {
        refilter()
    }, [filter])

    const itemMatches = (item) => {
        let match = true;
        for (const prop in filter) {
            if (Object.prototype.hasOwnProperty.call(filter, prop)) {
                if (filter[prop] && item[prop] !== filter[prop]) {
                    match = false;
                }
            }
        }
        return match;
    }


    const refilter = () => {
        setFilteredItems(items.filter(item => itemMatches(item)))
    }

    return (
        <div>
            <div>FILTER BY DATA1</div>
            <button className={`selectorButton-${!filter.example ? "active" : "inactive"}`}
                onClick={() => setFilter({
                    example: undefined
                })}>
                ANY
            </button>
            <button className={`selectorButton-${filter.example === "meme" ? "active" : "inactive"}`}
                onClick={() => setFilter({
                    example: "meme"
                })}>
                MEME
            </button>
            <button className={`selectorButton-${filter.example === "not-meme" ? "active" : "inactive"}`}
                onClick={() => setFilter({
                    example: "not-meme"
                })}>
                NOT MEME
            </button>
            <div className="shuffleCards">
                {filteredItems.map(item =>
                    <div className="shuffleCard" key={item.name}>
                        <Col>
                            <Row>OBJECT NAME: {item.name}</Row>
                            <Row>OBJECT DATA1: {item.example}</Row>
                            <Row>OBJECT DATA2: {item.data2}</Row>
                            <Row>
                                <img src="https://i.imgur.com/NqWw6ke.gif" alt="aaaaaaaaaa"/>
                            </Row>
                        </Col>
                    </div>
                )}
            </div>
        </div>
    );
}