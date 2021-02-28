import React, {useState, useEffect} from "react";
import "./Shuffle.scss"
import gems from "./gems"
import tomes from "./tomes"

export const ShuffleCollection = (props) => {

    const [filteredItems, setFilteredItems] = useState([{name: "loading", meme: "yes"}])
    const [filter, setFilter] = useState({})
    const [searchText, setSearchText] = useState(undefined)

    const items = [];

    if (items.length === 0) {
        for (const [key, value] of Object.entries(gems)) {
            const item = Object.assign({}, value);
            item.title = "SOCKET GEM"
            item.name = key;
            item.type = "gem"
            item.description = value.lore
            item.img = "https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/26/Emerald_JE3_BE3.png"
            item.background = "#10c810"
            items.push(item)
        }

        for (const [key, value] of Object.entries(tomes)) {
            const item = Object.assign({}, value);
            item.title = "ENCHANTMENT TOME"
            item.name = key;
            item.type = "tome"
            item.description = [value.description]
            item.img = "https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/50/Book_JE2_BE2.png"
            item.background = "#1243d9"
            items.push(item)
        }
    }

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

    const applyFilters = () => {
        setFilteredItems(items.filter(item => itemMatches(item)));
    }

    const yeHaplessBuffoon = (
        <div className="shuffleCard" style={{borderColor: "#AA0000"}} key="invalid-search">
            <div className="shuffleContent">
                <div className="title">⚠ IMPOTENT QUERIER DETECTED ⚠</div>
                <div className="subtitle">HALT! YOU'VE FOUND NO RESULTS!</div>
            </div>
            <div className="shuffleContent">
                <img src="https://i.imgur.com/Coc4Unz.gif" alt="aaaaaaaaaa"/>
            </div>
            <div className="shuffleContent">
                <p className="lore">Please refine your search and/or yourself, ye hapless buffoon</p>
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
                    {filteredItems?.length === 0 ? yeHaplessBuffoon : filteredItems.map((item, index) =>
                        <div className="shuffleCard" key={`Card-${item.name}-${item?.type}-${index}`}
                             style={{borderColor: `${item?.background}`}}>
                            <div className="shuffleContent">
                                <div className="title">{item?.title}</div>
                                <div className="subtitle">{item?.name}</div>
                            </div>
                            <div className="shuffleContent">
                                <img src={item?.img} alt="Loading..."/>
                            </div>
                            <div className="shuffleContent">
                                {item?.description?.map((line, index2) =>
                                    <p className="lore" key={`lore${index2}`}>{line}</p>)}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}