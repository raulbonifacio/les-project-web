/**
 * This function configures the Pug templating engine in
 * the application.
 */
async function pugConfigurer(app) {
	app.set("views", "src/assets/views/pages");
	app.set("view engine", "pug");
	app.locals.basedir = "src/assets/views";
}

module.exports = pugConfigurer;
