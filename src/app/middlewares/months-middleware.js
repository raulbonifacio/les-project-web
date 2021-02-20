/**
 * This middleware provides months to the response template and
 * also handles international names.
 */
function monthsMiddleware(_, response, next) {
	next();
	//TODO:Implement translation.
	response.locals.months = [
		"Janeiro",
		"Fevereiro",
		"Março",
		"Abril",
		"Maio",
		"Junho",
		"Julho",
		"Agosto",
		"Setembro",
		"Outubro",
		"Novembro",
		"Dezembro",
	];
}

module.exports = monthsMiddleware;
