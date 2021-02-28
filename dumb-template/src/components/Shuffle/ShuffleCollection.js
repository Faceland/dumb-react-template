import React, {useState, useEffect} from "react";
import "./Shuffle.scss"
import gems from "./gems"
import tomes from "./tomes"
///
export const ShuffleCollection = (props) => {

    const [filteredItems, setFilteredItems] = useState([{name: "loading", meme: "yes"}])
    const [filter, setFilter] = useState({})
    const [searchText, setSearchText] = useState(undefined)

    const items = [];

    if (items.length === 0) {
        for (const [key, value] of Object.entries(gems)) {
            const item = {};
            item.title = "SOCKET GEM"
            item.name = key;
            item.type = "gem"
            item.description = value.lore;
            item.equipment = value["item-groups"].join(" ").toLowerCase()
            item.img = "https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/26/Emerald_JE3_BE3.png";
            item.background = "#10c810";
            items.push(item);
        }

        for (const [key, value] of Object.entries(tomes)) {
            const item = {};
            item.title = "ENCHANTMENT TOME";
            item.name = key;
            item.type = "tome";
            item.description = [value.description];
            item.equipment = value["item-groups"].join(" ").toLowerCase()
            item.img = "https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/50/Book_JE2_BE2.png";
            item.background = "#1243d9";
            items.push(item);
        }
    }

    const applyFilters = () => {
        setFilteredItems(items.filter(item => itemMatches(item)));
    }

    const itemMatches = (item) => {
        let match = true;
        for (const prop in filter) {
            if (match && Object.prototype.hasOwnProperty.call(filter, prop) && filter[prop]) {
                if (filter[prop].strict) {
                    if (item[prop] !== filter[prop].value) {
                        match = false;
                        break;
                    }
                } else {
                    if (item[prop].includes(filter[prop].value)) {
                        match = false;
                        break;
                    }
                }
            }
        }
        return match && itemMatchesSearch(item);
    }

    const itemMatchesSearch = (item) => {
        return !searchText ||
            item.name?.toLowerCase().includes(searchText) ||
            item.title?.toLowerCase().includes(searchText) ||
            item.description?.join(" ").toLowerCase().includes(searchText) ||
            item.equipment?.includes(searchText)
    }

    useEffect(() => {
        applyFilters()
    }, [filter, searchText]);

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
                <div>FILTER BY EQUIPMENT</div>
                <button className={`selectorButton-${!filter.equipment?.value ? "active" : "inactive"}`}
                        onClick={() => setFilter({
                            ...filter,
                            equipment: undefined
                        })}>
                    ANY
                </button>
                <button
                    className={`selectorButton-${filter.equipment?.value === "melee weapon" ? "active" : "inactive"}`}
                    onClick={() => setFilter({
                        ...filter,
                        equipment: {value: "melee weapon", strict: "false"}
                    })}>
                    Weapon (Melee)
                </button>
                <button
                    className={`selectorButton-${filter.equipment?.value === "ranged weapon" ? "active" : "inactive"}`}
                    onClick={() => setFilter({
                        ...filter,
                        equipment: {value: "ranged weapon", strict: "false"}
                    })}>
                    Weapon (Ranged)
                </button>
                <button className={`selectorButton-${filter.equipment?.value === "armor" ? "active" : "inactive"}`}
                        onClick={() => setFilter({
                            ...filter,
                            equipment: {value: "armor", strict: "false"}
                        })}>
                    Armor
                </button>
            </div>
            <div>
                <div>FILTER BY ITEM TYPE</div>
                <button className={`selectorButton-${!filter.type?.value ? "active" : "inactive"}`}
                        onClick={() => setFilter({
                            ...filter,
                            type: undefined
                        })}>
                    ANY
                </button>
                <button className={`selectorButton-${filter.type?.value === "gem" ? "active" : "inactive"}`}
                        onClick={() => setFilter({
                            ...filter,
                            type: {value: "gem", strict: "true"}
                        })}>
                    SOCKET GEM
                </button>
                <button className={`selectorButton-${filter.type?.value === "tome" ? "active" : "inactive"}`}
                        onClick={() => setFilter({
                            ...filter,
                            type: {value: "tome", strict: "true"}
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
                                <div>
                                    <div className="tag">{item?.equipment}</div>
                                </div>
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