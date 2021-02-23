const express = require("express");
const userController = require("../controllers/userController");
const AuthController = require("../controllers/authController");

const router = express.Router();

const { getAllUsers } = userController;

router.post("./signup");
router.post("./login");

router.route("/").get(getAllUsers);

module.exports = router;
