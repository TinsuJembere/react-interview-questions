import { useState } from "react";
import "./App.css";
import Accordion from "./component/accordions";
import RandomColor from "./component/random-color";
import StarRating from "./component/star-rating";
import ImageSlider from "./component/image-slider";
import LoadData from "./component/loading-more-data";
import TreeList from "./component/tree-view";
import data from './component/tree-view/data';
import QRCodeGenerator from "./component/qr-code-generator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <Accordion /> */}
      {/*<RandomColor />*/}
      {/* <StarRating noOfStar={10} /> */}
      {/* <ImageSlider limit={'5'} page={'1'} url={'https://picsum.photos/v2/list'}/> */}
      {/* <LoadData /> */}
      {/* <TreeList menu={data}/> */}
      <QRCodeGenerator/>
    </div>
  );
}

export default App;
