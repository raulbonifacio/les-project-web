const facade = require("les-project-business");

const registerController = { 
	showRegisterForm(_request, response) { 
		response.render("register/index.pug");
	},
}

module.exports = registerController;
