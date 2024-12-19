import { useState } from "react";
import MenuList from "./menu-list";
import {FaChevronDown, FaChevronRight } from "react-icons/fa";

export default function MenuItem({ item }) {
    const [displayCurrentContent, setDisplayCurrentContent] = useState({});
    const [selectedLabel, setSelectedLabel] = useState(null);

    const handleToggleChildren = (getCurrentLabel) => {
        setDisplayCurrentContent({ ...displayCurrentContent, [getCurrentLabel]: !displayCurrentContent[getCurrentLabel] })
    }

    const handleLabelClick =(getSelectedLabel) => {
        setSelectedLabel(getSelectedLabel)
    }

    return (
        <li>
            <div className="menu-item">
                <p onClick={() => handleLabelClick(item.label)}>{item.label}</p>
                {item.children && item.children.length > 0 ? (<span onClick={() => handleToggleChildren(item.label)}>
                    {
                        displayCurrentContent[item.label] ? <FaChevronDown color="#fff" size={25}/> : <FaChevronRight color="#fff" size={25}/>
                    }
                </span>) : null}
            </div>
            {item.children && item.children.length > 0 && displayCurrentContent[item.label] ? (
                <MenuList list={item.children} />
            ) : null}
        </li>
    );
}
