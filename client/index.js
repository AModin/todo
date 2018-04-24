import React from "react"; // eslint-disable-line no-unused-vars
import { AppContainer } from "react-hot-loader";
import ReactDOM from "react-dom";
import AppRouter from "./routes";

const render = Component =>
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById("app")
    );

render(AppRouter);

