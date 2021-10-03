const UserController = require("../controllers/user.controller");

const express = require("express");
let router = express.Router();
router.get('/', (req, res) => res.send("Home page"));
router.post('/signup', UserController.register);
module.exports = router;