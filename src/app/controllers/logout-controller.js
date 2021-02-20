const logoutController = {
	async logout(request, _response) {
		await request.session.destroy();
	},
};

module.exports = logoutController;
