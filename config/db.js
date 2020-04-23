const mongoose = require("mongoose");
const config = require("config"); // config package will lookout for the config/default.json to look out for variables
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB...");
  } catch (error) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
