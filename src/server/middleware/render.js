import escapeStringRegexp from 'escape-string-regexp';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../../shared/App.js';

const renderMiddleware = () => (req, res) => {
    let html = req.html;
    const data = "server";

    const htmlContent = ReactDOMServer.renderToString(<App data={data}/>);

    const htmlReplacements = {
        HTML_CONTENT: htmlContent,
    };
    Object.keys(htmlReplacements).forEach(key => {
        const value = htmlReplacements[key];
        html = html.replace(new RegExp('__' + escapeStringRegexp(key) + '__', 'g'), value);
    });

    res.send(html);
};

export default renderMiddleware;
