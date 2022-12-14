const mongoose = require("mongoose");
//import mongoose from "mongoose"
mongoose.connect(process.env.MONGODB);

let blogSchema = new mongoose.Schema({
  post: String,
  title: String,
});

module.exports = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
export {}; //default mongoose.models.Blog || mongoose.model("Blog", blogSchema);
