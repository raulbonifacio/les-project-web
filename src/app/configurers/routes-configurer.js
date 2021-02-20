const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

/**
 * This function performs the route setup
 * for the application.
 */
async function routesConfigurer(app) {

	const router = new Router();

	router.use(middlewares);
	router.use(controllers);

	app.use(router);

	return app;
}

module.exports = routesConfigurer;
