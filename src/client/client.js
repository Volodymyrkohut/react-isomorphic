import React from "react";
import "../style.scss";
import {hydrate} from "react-dom";
import {Provider as ReduxProvider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import App from "../shared/App";
import configureStore from "./store";

const store = configureStore();

hydrate(
    <ReduxProvider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ReduxProvider>,
    document.getElementById('root')
);
