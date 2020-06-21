const router = require("express").Router();
const listController = require('../../controllers/listController');

router.route("/create")
	.post(listController.createList);

router.route('/getAll/:userId')
	.get(listController.getAllLists);

router.route('/:listId')
    .get(listController.getList)
    .put(listController.editList)
	.delete(listController.deleteList);

module.exports = router;