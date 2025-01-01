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
import LightDarkMode from "./component/light-dark-mode";
import ScrollIndicator from "./component/scroll-indicator";
import TabsTest from "./component/custom-tab/tabs-test";
import ModalPopUp from "./component/custom-modal-popup/modal-test";
import GithubProfileFinder from "./component/github-profile-finder";
import SearchAuthoComplete from "./component/authoComplete-search";
import TicTacToe from "./component/tictactoe";
import FeaturedFlagsGlobalContext from "./component/feature-flag/context";
import FeatureFlag from "./component/feature-flag";
import UseFetchHookTest from "./component/use-fetch/text";
import UseOnclickOutsideTest from "./component/use-outside-click/test";
import UseWindowResizeTest from "./component/use-window-resize/test";
import ScrollToTopAndButtom from "./component/scroll-to-top-and-down";
import ScrollToParticularSection from "./component/scroll-to-particular-section";


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
      {/* <QRCodeGenerator/> */}
      {/* <LightDarkMode/> */}
      {/* <ScrollIndicator url="https://dummyjson.com/products?limit=100"/> */}
      {/* <TabsTest/> */}
      {/* <ModalPopUp/> */}
      {/* <GithubProfileFinder/> */}
      {/* <SearchAuthoComplete/> */}
      {/* <TicTacToe/> */}
      {/* <FeaturedFlagsGlobalContext>
        <FeatureFlag/>
      </FeaturedFlagsGlobalContext> */}
      {/* <UseFetchHookTest/> */}
      {/* <UseOnclickOutsideTest/> */}
      {/* <UseWindowResizeTest/> */}
      {/* <ScrollToTopAndButtom/> */}
      <ScrollToParticularSection/>
    </div>
  );
}

export default App;
