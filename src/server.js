require("dotenv").config();
require("./db/connection");
const express = require("express");

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

app.listen(port, () => console.log(`Serveris listening on port ${port}`));
