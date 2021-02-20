function flashedDataMiddleware(request, response, next) {
	const flashed = request.session._flashedData || {};

	request.flashed = flashed;
	request.session._flashedData = {};

	response.locals.flashed = flashed;
	response.flash = function (data) {
		request.session._flashedData = {
			...data,
			...request.session._flashedData,
		};
	};

	next();
}

module.exports = flashedDataMiddleware;
