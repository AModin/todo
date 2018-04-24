import React from "react"; // eslint-disable-line no-unused-vars
import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from "react-router";
import App from "./views/App";
import Home from "./views/Home";

export default () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
        </Route>
    </Router>
);
