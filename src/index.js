import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./componentes/App";
import { HashRouter } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
