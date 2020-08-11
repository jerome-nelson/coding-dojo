const fs = require('fs');
const express = require('express')
const app = express();
const portFinderSync = require("portfinder-sync");

const port = portFinderSync.getPort(3000);

app.get('/customers/get/all', (req, res) => {
    fs.readFile('./utils/server/ipData.json', (err, json) => {
        res.setHeader("Access-Control-Allow-Origin", "*");

        // Don't need these headers
        res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
        res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.setHeader("X-Powered-By", ' 3.2.1');

        res.setHeader("Content-Type", "application/json;charset=utf-8");
        let obj = JSON.parse(json);
        res.json(obj);
    });
});

const callback = () => console.log(`Server is Running on http://localhost:${port}`);
app.listen(port, callback);