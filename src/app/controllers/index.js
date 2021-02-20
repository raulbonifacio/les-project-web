const { Router } = require("express");

const logoutController = require("./logout-controller");
const loginController = require("./login-controller");
const registerController = require("./register-controller");


const root = Router();

root.get("/login", loginController.showLoginForm);
root.post("/login", loginController.login);

root.post("/logout", logoutController.logout);
root.get("/logout", logoutController.logout);

root.get("/register", registerController.showRegisterForm);


module.exports = root;
