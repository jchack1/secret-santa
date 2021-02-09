const express = require("express");
const router = express.Router();

//getting group model, needed to make queries
const Group = require("../models/group");

//add a new group
router.post("/", (req, res) => {
  const newGroup = new Group({
    groupName: req.body.groupName,
    members: req.body.members,
  });
  newGroup.save().then((item) => res.json(item));
});

//get a group based on group name
router.get("/", (req, res) => {
  Group.find({ groupName: req.body.groupName }).then((group) =>
    res.json(group)
  );
});

//get member
// router.get("/member", (req, res) => {
//   Group.find({ members[name]: req.body.groupName }).then((group) =>
//     res.json(group)
//   );
// });

module.exports = router;
