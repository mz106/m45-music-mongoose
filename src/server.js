require("dotenv").config();
require("./db/connection");
const express = require("express");

const port = process.env.PORT || 5001; // two pipes || means or

const app = express();

app.use(express.json());

app.post("/songs", (request, response) => {
  response.send("Hello from songs post");
});

app.get("/songs", (request, response) => {
  response.send("hello from songs get");
});

app.put("/songs", (request, response) => {
  response.send("hello from songs put");
});

app.delete("/songs", (request, response) => {
  response.send("hello from songs delete");
});

app.listen(port, () => console.log(`Serveris listening on port ${port}`));
