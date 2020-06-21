const router = require("express").Router();
const listController = require('../../controllers/listController');

router.route("/getAllItems/:listid")
    .get(listController.getAllItems);

router.route('/lists/:userid')
    .get(listController.getAllLists);

router.route('/logout')
    .post(listController.logout);

module.exports = router;