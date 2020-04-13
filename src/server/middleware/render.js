import escapeStringRegexp from 'escape-string-regexp';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../../shared/App.js';
import {StaticRouter} from 'react-router-dom';
import {Provider as ReduxProvider} from 'react-redux';
import serialize from 'serialize-javascript';
import {actionInitData} from "../../shared/store/actions/init";

const renderMiddleware = () => (req, res) => {
    const {url, store} = req;
    let html = req.html;
    const context = {};

    const data = "server";


    const initData = store.dispatch(actionInitData());

    initData.then(() => {

        const htmlContent = ReactDOMServer.renderToString(
            <ReduxProvider store={store}>
                <StaticRouter location={url} context={context}>
                    <App data={data}/>
                </StaticRouter>
            </ReduxProvider>);

        const htmlReplacements = {
            HTML_CONTENT: htmlContent,
            PRELOADED_STATE: serialize(store.getState(), {isJSON: true}),
        };

        Object.keys(htmlReplacements).forEach(key => {
            const value = htmlReplacements[key];
            html = html.replace(new RegExp('__' + escapeStringRegexp(key) + '__', 'g'), value);
        });

        if (context.url) {
            res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
            res.header('Pragma', 'no-cache');
            res.header('Expires', 0);
            res.redirect(302, context.url);
        } else {
            res.send(html);
        }
    });
};

export default renderMiddleware;
