const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const wishlistSchema = new Schema({
//   wishlist: [{ item1: String }, { item2: String }, { item3: String }],
// });

const GroupSchema = new Schema({
  groupName: String,
  members: [
    {
      name: String,
      match: String,
      wishlist: [{ item1: String, item2: String, item3: String }],
    },
  ],
});

// const GroupSchema = new Schema({
//   groupName: { type: String },
//   members: { type: Array },
// });

const Group = mongoose.model("Group", GroupSchema);

module.exports = Group;
