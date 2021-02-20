function requestDataMiddleware(request, response, next) {
	next();
	response.locals.request = request;
}

module.exports = requestDataMiddleware;
