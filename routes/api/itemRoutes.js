const router = require("express").Router();
const listController = require('../../controllers/listController');

router.route("/add/:listId")
	.post(listController.addItem);

router.route("/getAll/:listid")
	.get(listController.getAllItems);

router.route('/:itemId')
    .put(listController.editItem)
	.delete(listController.deleteItem);

module.exports = router;