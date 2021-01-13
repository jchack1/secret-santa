const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  groupName: String,
  members: [
    {
      name: String,
      match: String,
      wishlist: [{ item1: String }, { item2: String }, { item3: String }],
    },
  ],
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
