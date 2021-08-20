const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes");
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "client")));

app.use("/", routes);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});