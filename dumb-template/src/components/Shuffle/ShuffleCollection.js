import React, {useState, useEffect} from "react";
import "./Shuffle.scss"
import gems from "./gems"
import tomes from "./tomes"

export const ShuffleCollection = (props) => {

    const [items, setItems] = useState([])
    const [filteredItems, setFilteredItems] = useState([{meme: "yes"}])
    const [filter, setFilter] = useState({})
    const [searchText, setSearchText] = useState(undefined)

    useEffect(() => {
        const newItems = [];

        for (const [key, value] of Object.entries(gems)) {
            const item = Object.assign({}, value);
            item.title = "SOCKET GEM"
            item.name = key;
            item.type = "gem"
            item.description = value.lore
            item.img = "https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/26/Emerald_JE3_BE3.png"
            item.background = "linear-gradient(#55FF55, #00AA00)"
            newItems.push(item)
        }

        for (const [key, value] of Object.entries(tomes)) {
            const item = Object.assign({}, value);
            item.title = "ENCHANTMENT TOME"
            item.name = key;
            item.type = "tome"
            item.description = [value.description]
            item.img = "https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/50/Book_JE2_BE2.png"
            item.background = "linear-gradient(#5555FF, #0000AA)"
            newItems.push(item)
        }

        setItems(newItems);
    }, []);

    useEffect(() => {
        applyFilters()
    }, [filter, items, searchText]);

    const itemMatches = (item) => {
        let match = true;
        for (const prop in filter) {
            if (match && Object.prototype.hasOwnProperty.call(filter, prop)) {
                if (filter[prop] && item[prop] !== filter[prop]) {
                    match = false;
                }
            }
        }
        return match && itemMatchesSearch(item);
    }

    const itemMatchesSearch = (item) => {
        return !searchText ||
            item.name?.toLowerCase().includes(searchText) ||
            item.title?.toLowerCase().includes(searchText) ||
            item.description?.join().toLowerCase().includes(searchText)
    }


    const applyFilters = async () => {
        setFilteredItems(await items.filter(item => itemMatches(item)));
    }

    const yeHaplessBuffoon = (
        <div className="shuffleCardBackground" style={{backgroundImage: "linear-gradient(#FFAA00, #AA0000)"}}>
            <div className="shuffleCard" key="invalid-search">
                <div className="shuffleContent">
                    <div>⚠ IMPOTENT QUERIER DETECTED ⚠</div>
                    <div>HALT! YOU'VE FOUND NO RESULTS!</div>
                </div>
                <div className="shuffleContent">
                    <img src="https://i.imgur.com/Coc4Unz.gif" alt="aaaaaaaaaa"/>
                </div>
                <div className="shuffleContent">
                    <p>Please refine your search and/or yourself, ye hapless buffoon</p>
                </div>
            </div>
        </div>
    )

    return (
        <div>
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
            </div>
            <div>
                <div>SEARCH</div>
                <input onChange={(e) => setSearchText(e.target.value.toLowerCase())}/>
            </div>
            <div>
                <div className="shuffleCards">
                    {filteredItems?.length === 0 ? yeHaplessBuffoon : filteredItems.map(item =>
                        <div className="shuffleCardBackground" style={{backgroundImage: `${item?.background}`}}>
                            <div className="shuffleCard" key={item?.name}>
                                <div className="shuffleContent">
                                    <div>{item?.title}</div>
                                    <div>{item?.name}</div>
                                </div>
                                <div className="shuffleContent">
                                    <img src={item?.img} alt="Loading..."/>
                                </div>
                                <div className="shuffleContent">
                                    {item?.description?.map(line =>
                                        <p>{line}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}