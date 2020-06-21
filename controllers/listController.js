const db = require('../models');

module.exports = {

	getAllLists: async (req, res) => {
		// const user = req.session.user
		const lists = await db.List.find({ _userId: req.params.userId })
		//.populate('lists')
		console.log(lists)
		res.json(lists)
	},

	getList: async (req, res) => {
		const listId = req.params.listId
		const list = await db.List.find({ _id: listId })
		res.json(list)
	},

	createList: async (req, res) => {
		console.log(req.body)
		const list = await db.List.create(req.body)
		res.json(list);
	},

	addItem: async (req, res) => {
		const item = await db.Item.create(req.body)
		res.json(item);
	},

	getAllItems: async (req, res) => {
		const items = awaitdb.Item.find({ _listId: req.params.listid })
		res.json(items);
	},

	deleteItem: async (req, res) => {
		await db.Item.deleteOne({ _id: req.params.itemId })
		res.json({ "success": "true" })
	},

	deleteList: async (req, res) => {
		await db.List.deleteOne({ _id: req.params.listId })
		await db.Item.deleteMany({ _listId: req.params.listId })
		res.json({ "success": "true" })
	},

	editItem: async (req, res) => {
		const item = await db.Item.findByIdAndUpdate(req.params.itemId, req.body)
		res.json(item);
	},

	editList: async (req, res) => {
		const list = await db.List.findByIdAndUpdate(req.params.list, req.body)
		res.json(list);
	},
}