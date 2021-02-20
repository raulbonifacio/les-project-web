const methodOverride = require("method-override");

function methodOverrideConfigurer(app) { 
	app.use(methodOverride("_method"));
}

module.exports = methodOverrideConfigurer;
