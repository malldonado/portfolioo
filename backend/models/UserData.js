// models/User.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: false, unique: true },
  password: { type: String, required: false},
  firstName: { type: String, required: false},
  lastName: { type: String, required: false},
  phone: { type: String },
  instagram: { type: String },
  linkedin: { type: String },
  github: { type: String },
  dribbble: { type: String },
});

userSchema.statics.findOneByEmail = function(email) {
  return this.findOne({ email });
};

const User = mongoose.model("User", userSchema);

module.exports = User;
