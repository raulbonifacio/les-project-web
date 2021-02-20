const csurf = require("csurf");

/**
 * This function configures a csrf protection middleware
 * in the application.
 */
async function csrfConfigurer(app) {
	app.use(csurf({ cookie: false, httpOnly: true }));

	// error handler
	app.use(function (err, _, res, next) {
		if (err.code !== "EBADCSRFTOKEN") return next(err);

		// handle CSRF token errors here
		res.status(403);
		res.send(err);
	});
}

module.exports = csrfConfigurer;
