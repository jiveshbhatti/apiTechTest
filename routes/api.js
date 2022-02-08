var express = require("express");
var router = express.Router();
let users2 = ["test", "jivesh", "janet"];
/* GET home page. */
router.get("/", function (req, res, next) {
  users2.length ? res.send(users2).status(200) : res.send("No users in DB");
});

//ADD to the data
router.post("/", function (req, res, next) {
  const { name } = req.body;
  //conditional if else setup to check name if already exist using find. Depending on data model.
  users2.push(name);
  res.send(users2).status(200);
});

//Change by ID
router.put("/:id", function (req, res, next) {
  const name = req.body.name;
  const id = req.params.id;

  if (users2[id]) {
    users2[id] = name;
    res.send(users2).status(201);
  } else {
    res.status(400).json({ message: "No ID provided" });
  }
  throw new Error();
});

//Delete by index
router.delete("/:id", function (req, res, next) {
  const id = req.params.id;
  if (users2[id]) {
    users2.splice(id, 1);
    res.send(users2).status(204);
  } else {
    res.status(400).json({ message: "No ID provided" });
  }
});

module.exports = router;
