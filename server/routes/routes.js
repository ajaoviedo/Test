import express from "express"
import path from "path"

import { authenticateSession } from "../controllers/auth.js"
import * as userRoutes from "./userRoutes.js"
import * as shipRoutes from "./shipRoutes.js"

/**
 * @param {express.IRouter} app Express app
 */
const initRoutes = (app) => {
    const apiEP = "/api/v1";
    shipRoutes.route(app, `${apiEP}/ship`)
    userRoutes.route(app, `${apiEP}/user`);

    app.use(`${apiEP}/getList`, (req, res) => { res.json(["hello", "there", "world"]); });
    
    app.use("/images/", express.static("./client/images"));
    app.use("/js/", express.static("./react_client/src/App/static/js"));
    // app.use("/", authenticateSession(true), express.static("./client"));
    
    // 404
    app.all('/*', (req, res) => {

        if (res.statusCode === 404) {
            res.sendFile(path.resolve("./client/notfound.html"));
        }
    });
}

export { initRoutes };