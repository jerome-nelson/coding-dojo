const fs = require('fs');
const express = require('express')
const app = express()
const port = 3000
const portFinderSync = require("portfinder-sync");

app.put('/customers/get/all', (req, res) => {
    fs.readFile('./utils/server/ipData.json', (err, json) => {
        let obj = JSON.parse(json);
        res.json(obj);
    });
})

app.listen(portFinderSync.getPort(port), 
    () => console.log(`Server is Running on http://localhost:${port}`))