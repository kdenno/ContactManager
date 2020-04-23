const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const config = require('config');
const jwt = require("jsonwebtoken");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  data: {
    type: Date,
    default: Date.now,
  },
});

// creat pre save actions
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  // encrypt password
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// add methods to model
UserSchema.methods.getSignedJwtToken = function() {
    return jwt.sign({ id: this._id }, config.get('JWT_SECRET'), {
        expiresIn: config.get('JWT_EXPIRE'),
      });
}

module.exports = mongoose.model("user", UserSchema);
