import { useState } from "react";
import data from "./data";
import "./style.css";
import { use } from "react";

export default function Accordion() {
  const [selector, setSelector] = useState(null);
  const [EnableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiSelector, setMultiSelector] = useState([]);

  const handleSingleSelection = (getCurrentKey) => {
    setSelector(getCurrentKey === selector ? null : getCurrentKey);
  };

  const handleMultipleSelection = (getCurrentKey) => {
    const cpyMultiple = [...multiSelector];
    let findIndexOfcurrentKey = cpyMultiple.indexOf(getCurrentKey);

    if(findIndexOfcurrentKey === -1) {cpyMultiple.push(getCurrentKey)}
    else{cpyMultiple.splice(findIndexOfcurrentKey, 1)};

    setMultiSelector(cpyMultiple);
  };


  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!EnableMultiSelection)}>
        Enable MultiSelection
      </button>
      <div className="accordion">
        {data && data.length ? (
          <div>
            {data.map((dataItem) => (
              <div className="item" key={dataItem.key}>
                <div
                  onClick={
                    EnableMultiSelection
                      ? () => handleMultipleSelection(dataItem.key)
                      : () => handleSingleSelection(dataItem.key)
                  }
                  className="header"
                >
                  <h3>
                    {dataItem.title} <span>+</span>
                  </h3>
                </div>
                {EnableMultiSelection? multiSelector.indexOf(dataItem.key) !== -1 &&
                  (<div className="content">{dataItem.answer}</div>) : (selector === dataItem.key &&
                  <div className="content">{dataItem.answer}</div>)}
              </div>
            ))}
          </div>
        ) : (
          <div>no data found</div>
        )}
      </div>
    </div>
  );
}
