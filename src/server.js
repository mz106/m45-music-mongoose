require("dotenv").config();
require("./db/connection");
const express = require("express");

const Song = require("./song/model");

console.log("!!!!!!!!!!!: ", Song);
const port = process.env.PORT || 5001; // two pipes || means or

const app = express();

app.use(express.json());

app.post("/songs", async (request, response) => {
  const newSong = await Song.create({
    songName: request.body.songName,
    artist: request.body.artist,
  });

  console.log(newSong);
  const successResponse = {
    message: "success",
    newSong: newSong,
  };

  response.send(successResponse);
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
