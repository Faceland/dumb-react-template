import React, {useState, useEffect} from "react";
import "./Shuffle.scss"
import gems from "./gems"
import tomes from "./tomes"

export const ShuffleCollection = (props) => {

    const [items, setItems] = useState([])
    const [filteredItems, setFilteredItems] = useState([])
    const [filter, setFilter] = useState({})

    useEffect(() => {
        const newItems = [];

        for (const [key, value] of Object.entries(gems)) {
            const item = Object.assign({}, value);
            item.title = "SOCKET GEM"
            item.name = key;
            item.type = "gem"
            item.description = value.lore
            item.img = "https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/26/Emerald_JE3_BE3.png"
            newItems.push(item)
        }

        for (const [key, value] of Object.entries(tomes)) {
            const item = Object.assign({}, value);
            item.title = "ENCHANTMENT TOME"
            item.name = key;
            item.type = "tome"
            item.description = [value.description]
            item.img = "https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/50/Book_JE2_BE2.png"
            newItems.push(item)
        }

        setItems(newItems);
    }, []);

    useEffect(() => {
        refilter()
    }, [filter, items]);

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
            <div>FILTER BY TYPE</div>
            <button className={`selectorButton-${!filter.type ? "active" : "inactive"}`}
                    onClick={() => setFilter({
                        type: undefined
                    })}>
                ANY
            </button>
            <button className={`selectorButton-${filter.type === "gem" ? "active" : "inactive"}`}
                    onClick={() => setFilter({
                        type: "gem"
                    })}>
                SOCKET GEM
            </button>
            <button className={`selectorButton-${filter.type === "tome" ? "active" : "inactive"}`}
                    onClick={() => setFilter({
                        type: "tome"
                    })}>
                ENCHANTMENT TOME
            </button>
            <div className="shuffleCards">
                {filteredItems.map(item =>
                    <div className="shuffleCard" key={item.name}>
                        <div className="shuffleContent">
                            <div>{item.title}</div>
                            <div>{item.name}</div>
                        </div>
                        <div className="shuffleContent">
                            <img src={item.img} alt="aaaaaaaaaa"/>
                        </div>
                        <div className="shuffleContent">
                            {item.description?.map(line =>
                                <p>{line}</p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}