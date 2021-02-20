function authenticationMiddleware(request, response, next) {
	if (request.session.user) {
		return next();
	} else {
		response.redirect("/login");
	}
}

module.exports = authenticationMiddleware;
