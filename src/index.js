import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "./react-auth0-wrapper";
import config from "./auth_config.json";

ReactDOM.render(
    <Auth0Provider domain={config.domain} client_id={config.clientId}>
        <App />
    </Auth0Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();