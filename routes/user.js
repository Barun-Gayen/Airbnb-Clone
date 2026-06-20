const express = require ("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/users.js");

router.route("/signup")
.get(userController.renderSignupForm)
.post(wrapAsync(userController.signup))

router.route("/login")
.get(userController.renderLogin)
.post(saveRedirectUrl, passport.authenticate("local", {failureReddirect: "/login", failureFlash: true}), userController.Login);

router.get("/logout", userController.logOut);

module.exports = router;