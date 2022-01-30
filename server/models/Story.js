const { Schema, model } = require("mongoose");
const commentSchema = require("./Comment");
const dateFormat = require("../utils/dateFormat");

const storySchema = new Schema(
  {
     storyTitle: {
       type: String,
       required: "Please enter a title",
       minlength: 1,
       maxlength: 80

     },
    storyText: {
      type: String,
      required: "Please leave a story",
      minlength: 1,
      maxlength: 500,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
    comments: [commentSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

storySchema.virtual("commentCount").get(function () {
  return this.comments.length;
});

const Story = model("Story", storySchema);

module.exports = Story;
