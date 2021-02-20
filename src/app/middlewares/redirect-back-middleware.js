function redirectBackMiddleware(request, response, next) {
	const { previousPath = "/" } = request.flashed;

	response.redirectBack = function () {
		response.redirect(previousPath);
	};

	response.flash({ previousPath: request.path });

	next();
}

module.exports = redirectBackMiddleware;
