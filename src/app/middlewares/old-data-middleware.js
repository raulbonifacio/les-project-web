function oldDataMiddleware(request, response, next) {
	const { old = {} } = request.flashed;
	response.locals.old = old;
	response.flash({ old: request.body });
	next();

	console.log(old);
}

module.exports = oldDataMiddleware;
