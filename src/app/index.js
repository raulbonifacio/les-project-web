
const express = require("express");

const { PORT } = process.env;

const configurers = [
	require("./configurers/method-override-configurer"),
	require("./configurers/pug-configurer"),
	require("./configurers/static-configurer"),
	require("./configurers/body-parser-configurer"),
	require("./configurers/session-configurer"),
	require("./configurers/csrf-configurer"),
	require("./configurers/routes-configurer"),
];

/**
 * This function calls the configurers and starts the application.
 */
module.exports = async () => {
	try {
		const app = express();

		const port = PORT || 8080;

		for (configurer of configurers) {
			await configurer(app);
		}

		app.listen(port, () => console.log(`Listening to localhost:${port}`));

	} catch (error) {
		console.error(error);
	}
};
