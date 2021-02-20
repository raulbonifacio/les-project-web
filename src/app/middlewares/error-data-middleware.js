function errorDataMiddleware(request, response, next) {
	const { errors = {} } = request.flashed;
	response.locals.errors = errors;
	next();
}

module.exports = errorDataMiddleware;
