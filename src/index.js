import express from 'express';
import app from "./server";

express()
    .use((req, res) => app.handle(req, res))
    .listen(process.env.PORT || 8080, () => {
        console.log(
            `React-isomorphic App is running`
        );
    });