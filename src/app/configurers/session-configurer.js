const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sequelize = require("../util/helpers/sequelize");

const { SECRET } = process.env;

/**
 * This function configures the session in the application.
 */
async function sessionConfigurer(app) {
	const store = new SequelizeStore({
		db: sequelize,
		checkExpirationInterval: 5 * 60 * 1000,
		expiration: 60 * 60 * 1000,
	});

	await sequelize.authenticate();
	await store.sync();

	app.use(
		session({
			store,
			resave: false,
			secret: SECRET,
			saveUninitialized: true,
		})
	);
}

module.exports = sessionConfigurer;
