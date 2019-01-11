import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import App from "./components/App";

ReactDOM.render(
    /*<Hello compiler="TypeScript" framework="React" />,*/
    <App/>,
    document.getElementById("example")
);