/**
 * This middleware provides the `redirectBack` method on the response
 * object. It requires the flashedDataMiddleware to be setup first.
 */
function redirectWithErrorsMiddleware(_request, response, next) {
	response.redirectBackWithErrors = function (errors) {
		response.flash({ errors });
		response.redirectBack();
	};

	response.redirectWithErrors = function (path, errors) {
		response.flash({ errors });
		response.redirect(path);
	};

	next();
}

module.exports = redirectWithErrorsMiddleware;
