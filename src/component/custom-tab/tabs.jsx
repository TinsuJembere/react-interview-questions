import { useState } from "react";
import './styles.css';

export default function Tabs({ data, onChange }) {
    const [currentContentIndex, setCurrentContentIndex] = useState(0);

    const handleClick = (getIndex) => {
        setCurrentContentIndex(getIndex);
        onChange?.(getIndex);
    }
    return <div className="wrapper">
        <div className="heading">
            {
                data.map((dataItem, index) => (
                    <div key={index} onClick={() => handleClick(index)} className={`tab-item ${index === currentContentIndex ? 'active' : ''}`}>
                        <span>{dataItem.label}</span>
                    </div>
                ))
            }
        </div>
        <div className="content">
            {data[currentContentIndex].content}
        </div>
    </div>
}