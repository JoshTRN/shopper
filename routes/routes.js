const listController = require('../controllers/listController')

module.exports = function(app) {
    
    // Checks if user exists and creates user if not
    app.post('/api/users', listController.checkUser);
    
    //creates new list
    app.post('/api/createList', listController.createList);
    
    // creates a new item
    app.post('/api/:listId/addItem', listController.addItem);

    // modifies existing list
    app.put("/api/lists/:list", listController.editList);

    // modifies existing item
    app.put("/api/items/:itemId", listController.editItem)

    // this routes to the user's homePage and all lists
    app.get('/api/lists', listController.getAllLists);

    // gets a specific list
    app.get('/api/lists/:list', listController.getList);

    // deletes a specific list
    app.delete('/api/:listId', listController.deleteList);

    // deletes a specific item
    app.delete('/api/lists/:itemId', listController.deleteItem);

    // logs user out
    app.get('/logout', listController.logout);
}