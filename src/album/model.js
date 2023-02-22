const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  songName: {
    type: String,
    required: true,
    unique: true,
  },
  artist: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    default: "No genre specified",
  },
  trackLength: {
    type: Number,
    default: 0,
  },
});

const Song = mongoose.model("song", songSchema);

module.exports = Song;

// class Person {
//   constructor(firstName, age, isAwesome) {
//     this.firstName = firstName;
//     this.age = age;
//     this.isAwesome = isAwesome;
//   }
// }

// const michael = new Person("michael", 39, true);

// const michaelLiteral = {
//   firstName: "michael",
//   age: 39,
//   isAwesome: true,
// };
