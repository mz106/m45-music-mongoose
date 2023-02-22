const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://michael:iNDXKdkpljjB47I0@cluster0.ntmsxeg.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
};

connection();
