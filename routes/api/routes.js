const router = require("express").Router();
const listController = require('../../controllers/listController');

router.route("/users")
// Checks if user exists and creates user if not
    .post(listController.checkUser);

router.route("/createList")
 //creates new list
    .post(listController.createList);

router.route("/addItem/:listId")
// creates a new item
    .post(listController.addItem);

router.route("/getAllItems/:listid")
// gets all items on a list
    .get(listController.getAllItems);

router.route('/lists/:list')
// modifies existing list
    .put(listController.editList);

router.route('/items/:itemId')
// modifies existing item
    .put(listController.editItem);

router.route('/lists/:userid')
 // this routes to the user's homePage and all lists
    .get(listController.getAllLists);

router.route('/lists/:list')
// gets a specific list
    .get(listController.getList);

router.route('/deleteList/:listId')
// deletes a specific list
    .delete(listController.deleteList);

router.route('/deleteItem/:itemId')
// deletes a specific item
    .delete(listController.deleteItem);

router.route('/logout')
// logs user out
    .get(listController.logout);

module.exports = router;

// module.exports = function(app) {
    
    // // Checks if user exists and creates user if not
    // app.post('/api/users', listController.checkUser);
    
    // //creates new list
    // app.post('/api/createList', listController.createList);
    
    // // creates a new item
    // app.post('/api/:listId/addItem', listController.addItem);

    // modifies existing list
    // app.put("/api/lists/:list", listController.editList);

    // // modifies existing item
    // app.put("/api/items/:itemId", listController.editItem);

    // this routes to the user's homePage and all lists
    // app.get('/api/lists', listController.getAllLists);

    // // gets a specific list
    // app.get('/api/lists/:list', listController.getList);

    // deletes a specific list
    // app.delete('/api/:listId', listController.deleteList);

    // // deletes a specific item
    // app.delete('/api/lists/:itemId', listController.deleteItem);

    // logs user out
//     app.get('/logout', listController.logout);
// }