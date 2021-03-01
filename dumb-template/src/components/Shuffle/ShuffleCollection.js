import React, {useState, useEffect} from "react";
import "./Shuffle.scss"
import gems from "./gems"
import tomes from "./tomes"

export const ShuffleCollection = (props) => {

    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([{name: "loading", meme: "yes"}]);
    const [filter, setFilter] = useState({});
    const [searchText, setSearchText] = useState("");
    const [searchTags, setSearchTags] = useState([]);
    const [uniqueTags, setUniqueTags] = useState([]);

    useEffect(() => {
        if (items.length === 0) {
            const newItems = [];
            for (const [key, value] of Object.entries(gems)) {
                const item = {};
                item.title = "SOCKET GEM"
                item.name = key;
                item.type = "gem"
                item.description = value.lore;
                item.tags = mapGroupsToTags(value['item-groups'])
                item.img = "https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/26/Emerald_JE3_BE3.png";
                item.background = "#10c810";
                newItems.push(item);
            }

            for (const [key, value] of Object.entries(tomes)) {
                const item = {};
                item.title = "ENCHANTMENT TOME";
                item.name = key;
                item.type = "tome";
                item.description = [value.description];
                item.tags = mapGroupsToTags(value['item-groups'])
                item.img = "https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/50/Book_JE2_BE2.png";
                item.background = "#1243d9";
                newItems.push(item);
            }
            setItems(newItems);
            setSearchTags([]);
        }
    }, []);

    useEffect(() => {
        applyFilters()
    }, [filter, searchText, searchTags]);

    useEffect(() => {
        const set = new Set(uniqueTags);
        if (set.size !== uniqueTags.length) {
            setUniqueTags(Array.from(set));
        }
    }, [uniqueTags])

    const mapGroupsToTags = (groups) => {
        const tags = []
        groups.forEach((group) => {
            if (!group.startsWith("-")) {
                const tag = group.toLowerCase();
                tags.push(tag);
                if (!uniqueTags.includes(tag)) {
                    setUniqueTags(uniqueTags => [...uniqueTags, tag]);
                }
            }
        });
        console.log("test", tags)
        return tags;
    }

    const applyFilters = () => {
        setFilteredItems(items.filter(item => itemMatches(item) && itemMatchesSearch(item)));
    }

    const checkMatch = (property, value, strict) => {
        return strict ? property === value : property.includes(value);
    }

    const itemMatches = (item) => {
        let match = true;
        for (const prop in filter) {
            if (match && Object.prototype.hasOwnProperty.call(filter, prop) && filter[prop]) {
                if (!checkMatch(item[prop], filter[prop].value, filter[prop].strict)) {
                    match = false;
                    break;
                }
            }
        }
        return match;
    }

    const tagsApplicable = (item) => {
        if (searchTags.length === 0) return true;
        for (const tag of searchTags) {
            if (!item.tags.includes(tag)) return false
        }
        return true;
    }

    const itemMatchesSearch = (item) => {
        return tagsApplicable(item) && (!searchText ||
            item.name?.toLowerCase().includes(searchText) ||
            item.title?.toLowerCase().includes(searchText) ||
            item.description?.join(" ").toLowerCase().includes(searchText) ||
            item.tags?.join(" ").toLowerCase().includes(searchText))
    }

    const toggleTag = (tag) => {
        const newTags = Object.assign([], searchTags);
        searchTags.includes(tag) ? newTags.splice(newTags.indexOf(tag), 1) : newTags.push(tag);
        setSearchTags(newTags);
    }

    const enableTag = (tag) => {
        if (searchTags.includes(tag)) return;
        const newTags = Object.assign([], searchTags);
        newTags.push(tag);
        setSearchTags(newTags);
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
                <div>FILTER BY TAG</div>
                {uniqueTags.map((tag, index) =>
                    <button
                        className={`selectorButton-${searchTags.includes(tag) ? "active" : "inactive"}`}
                        key={"toggle" + index}
                        onClick={() => toggleTag(tag)}>
                        {tag}
                    </button>
                )}
                <button type="checkbox" className="selectorButton-clear" onClick={() => setSearchTags([])}>Clear
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
                                    {item?.tags?.map((tag, index2) =>
                                        <button
                                            className="tag"
                                            key={`tag${index2}`}
                                            onClick={() => enableTag(tag)}
                                        >{tag}</button>)}
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