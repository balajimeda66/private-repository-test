const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.set("strictQuery", false);

let uri =
  "mongodb+srv://freelancing:balaji66@cluster0.a3lzrjs.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(uri)
  .then(() => {
    console.log("mongo connection is open");
  })
  .catch((err) => {
    console.log("mongo connection error");
    console.log(err);
  });

const LogInSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: String,
    required: true,
    minlength: 10,
  },
  age: {
    type: String,
    required: true,
    minlength: 2,
  },
  pincode: {
    type: String,
    required: true,
    minlength: 6,
  },
  aadhar: {
    type: String,
    required: true,
    minlength: 12,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("LogIncollection", LogInSchema);

module.exports = collection;
