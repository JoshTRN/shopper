
const db = require('../models');

module.exports = {
	checkUser: async (req, res) => {
		const { email } = req.body;
		let user = await db.User.findOne({ email: email })

		if (!user) {
			user = await db.User.create(req.body)
		}

		res.json(user);
	},

	logout: req => {
		req.session.destroy();
	}
}