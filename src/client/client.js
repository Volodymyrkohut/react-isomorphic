import React from "react";
import "../style.scss";
import {hydrate} from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from "../shared/App";

hydrate(
    <BrowserRouter>
        <App data="client"/>
    </BrowserRouter>, document.getElementById('root')
);
