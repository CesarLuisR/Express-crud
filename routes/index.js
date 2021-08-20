const express = require('express');
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.post('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    const name = req.body.name,
        rating = req.body.rating;

    const db = JSON.parse(fs.readFileSync(path.join(__dirname, "../database.json"), 'utf8'));

    db.movies.push({ name, rating });

    fs.writeFileSync(path.join(__dirname, "../database.json"), JSON.stringify(db));

    res.send("Data are send");
});

router.get("/api", (req, res) => {
    res.setHeader('Content-Type', 'text/json');
    const data = fs.readFileSync(path.join(__dirname, "../database.json"), "utf8");
    res.send(data);
});

module.exports = router;