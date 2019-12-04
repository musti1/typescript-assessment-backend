import express = require('express');
import compression = require("compression");  // compresses requests
import session = require("express-session");
import bodyParser = require("body-parser");
import path = require("path");
import cors = require('cors');

import passport = require("passport");

import WOWApioutes from "../Http/Routes/WOWApi.routes";
require('../app/Infrastructure/DbConnections/mongo');
// Create Express server
const app = express();


// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: "abc12345xyz",
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use('/wow', WOWApioutes);
app.use(
    express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

export default app;