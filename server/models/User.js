const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const storySchema = require('./Story');


const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
<<<<<<< HEAD
    // region: {
    //   type: String,
    //   required: false,
    //   minlength: 5,
    // },
    stories: [
      {
        type: Schema.Types.ObjectId,
        ref: "Story",
      },
    ],
=======
    region: {
      type: String,
      minlength: 5,
    },
    stories: [storySchema.schema],
>>>>>>> 7f6e68b371f1186ba74032ad4b140acd01d5cd2d
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};


const User = model("User", userSchema);

module.exports = User;
