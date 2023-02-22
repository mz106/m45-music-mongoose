require("dotenv").config();
require("./db/connection");
const express = require("express");

const Song = require("./song/model");

console.log("!!!!!!!!!!!: ", Song);
const port = process.env.PORT || 5001; // two pipes || means or

const app = express();

app.use(express.json());

app.post("/songs", async (request, response) => {
  // const newSong = await Song.create({
  //   songName: request.body.songName,
  //   artist: request.body.artist,
  // });

  const newSong = await Song.create(request.body);

  console.log(newSong);

  const successResponse = {
    message: "success",
    newSong: newSong,
  };

  response.send(successResponse);
});

app.get("/songs", async (request, response) => {
  const allSongs = await Song.find({});

  const successResponse = {
    message: "success",
    allSongs: allSongs,
  };

  response.send(successResponse);
});

// example request body for put with dynamic updateObj

// {
//   "songName": "lucy in the sky with diamonds",
//   "updateValue": 1000,
//   "updateKey": "trackLength"
// }

app.put("/songs", async (request, response) => {
  // const filterObj = { songName: request.body.songName };
  // const updateObj = { artist: request.body.newArtist };

  const filterObj = { songName: request.body.songName };
  const updateObj = { [request.body.updateKey]: request.body.updateValue };

  console.log(filterObj, updateObj);

  const updatedSong = await Song.updateOne(filterObj, updateObj);

  const successResponse = {
    message: "success",
    updatedSong: updatedSong,
  };

  response.send(successResponse);
});

app.delete("/songs", (request, response) => {
  response.send("hello from songs delete");
});

app.listen(port, () => console.log(`Serveris listening on port ${port}`));
