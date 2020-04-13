import path from 'path';
import express from 'express';
import htmlMiddleware from './middleware/html';
import renderMiddleware from './middleware/render';
const app = express();

app.use("/public", express.static(path.resolve(__dirname, 'public')));
app.use(htmlMiddleware());
app.use(renderMiddleware());

export default app;
