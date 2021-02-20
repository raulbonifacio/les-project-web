const express = require("express");

/**
 * This function configurers the static folder
 * for serving files.
 */
async function staticConfigurer(app) {
	app.use(express.static("src/public"));
}

module.exports = staticConfigurer;
