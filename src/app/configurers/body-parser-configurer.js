const express = require("express");

/**
 * This function adds a bodyparser to the application.
 */
async function bodyParserConfigurer(app) {
	app.use(express.urlencoded({ extended: true }));
}

module.exports = bodyParserConfigurer;
