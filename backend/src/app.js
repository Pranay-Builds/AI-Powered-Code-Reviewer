const express = require("express");

const app = express() // creates a server but does not start

app.get('/', (req, res) => {
    res.send('Hello World!')
})

module.exports = app;

