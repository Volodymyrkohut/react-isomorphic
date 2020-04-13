import path from 'path';
import express from 'express';
import htmlMiddleware from './middleware/html';
import storeMiddleware from './middleware/store';
import renderMiddleware from './middleware/render';
const app = express();

app.use("/public", express.static(path.resolve(__dirname, 'public')));
app.use(htmlMiddleware());
app.use(storeMiddleware()); // must come before render middleware
app.use(renderMiddleware());

export default app;
