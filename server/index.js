const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// Data
let inventory = [
    "computer",
    "jacket",
    "headphones",
    "cologne",
    "table",
    "chair",
    "mouse",
    "keyboard",
    "monitor",
    "rubber duck",
];

app.get("/api/inventory", (req,res) => {
    if(inventory.includes(req.query.item)) {
        res.status(200).send([req.query.item]);
    }
    res.status(200).send(inventory);
});

app.get("/api/inventory/:index", (req, res) => {
    const { index } = req.params
    res.status(200).send(inventory[index])
});

const port = 5050

app.listen(port, () => console.log(`Listening to port ${port}`))