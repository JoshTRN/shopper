const { User } = require('../models');

module.exports = {
	checkUser: async (req, res) => {
		const { email } = req.body;
		let user = await User.findOne({ email: email })

		if (!user) user = await User.create(req.body)

		res.json(user);
	}
}