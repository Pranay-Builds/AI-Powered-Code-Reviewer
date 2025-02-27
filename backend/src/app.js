const express = require("express");
const aiRoutes = require("./routes/ai.routes");
const cors = require("cors");

const app = express() // creates a server but does not start
app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/ai', aiRoutes);

module.exports = app;

