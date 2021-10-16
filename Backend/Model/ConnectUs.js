const mongoose = require("mongoose");
const { Schema } = mongoose;

const connectSchema = new Schema({
  
  email: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Connect = mongoose.model('Connect', connectSchema);
module.exports = Connect;
