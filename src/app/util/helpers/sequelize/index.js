const Sequelize = require("sequelize");

const {
	host,
	database,
	username,
	password,
	dialect,
	port,
} = require("./config");

const sequelize = new Sequelize(database, username, password, {
	host,
	dialect,
	port,
});

module.exports = sequelize

