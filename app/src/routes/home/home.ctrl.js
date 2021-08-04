"use strict";

const User = require("../../models/User");

const output = {
    hello: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    }
};

const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);  // 클라이언트에게 json 형태로 응답
    }
};

module.exports = {
    output, 
    process
};