import { useContext } from "react";
import Accordion from "../accordions";
import LightDarkMode from "../light-dark-mode";
import RandomColor from "../random-color";
import TicTacToe from "../tictactoe";
import { FeatureFlagsContext } from "./context";
import QRCodeGenerator from "../qr-code-generator";

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
        key: 'showLightAndDarkMode',
        component: <LightDarkMode />
    },
    {
        key: 'showTicTacToe',
        component: <TicTacToe />
    },
    {
        key: 'showRandomColorGenerator',
        component: <RandomColor />
    },
    {
        key: 'showQrCodeGenerator',
        component: <QRCodeGenerator/>
    },
    {
        key: 'showAccordions',
        component: <Accordion />
    }
];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  if (loading) return <h1>Loading data ! Please wait</h1>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}






