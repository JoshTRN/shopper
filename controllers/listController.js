const db = require('../models');
// var mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/shopper");


// db.Item.deleteOne({ _id: "5b3e7e9ece9645b5a53e51ac" }).then(result => console.log(result))

module.exports = {

    checkUser: function (req, res) {
        // set our user variables
        let user = req.body.name;
        let email = req.body.email;
        let imgUrl = req.body.imgUrl;

        // check our database for user
        db.User.findOne({ email: email })
            .then(result => {
                // If result == null, user does not exist.
                if (result === null) {
                    // Create user in database.
                    db.User.create({ name: user, email: email, imgUrl: imgUrl }).then(user => {
                        // set the session user to the ID
                        req.sessions.user = user._id
                        // send the OK
                        res.json(user);
                    })
                    // Otherwise, user exists. Send 'OK'
                } else {
                    // set the session user to the ID
                    req.session.user = result._id
                    // send the OK
                   res.json(result);
                }
            })
    },

    getAllLists: function (req, res) {

        let user = req.session.user
        // find the user user
        db.User.find({ _id: user })
            // populate his/her lists
            .populate('lists')
            .then(result => {
                res.json(result)
            });
    },
    getList: function (req, res) {
        let list = req.params.list
        db.List.find({ _id: list })
            .populate('items')
            .then(result => {
                res.json(result)
            });
    },
    createList: function (req, res) {
        let user = req.session.user

        db.List.create(req.body).then(List => {
            console.log(List)
            db.User.findOneAndUpdate({ _id: user }, { $push: { lists: List } }).populate('lists').then(User => {
                res.json(User)
            });
        })
    },
    addItem: function (req, res) {

        db.Item.create(req.body).then(Item => {
            db.List.findOneAndUpdate({ _id: req.params.listId }, { $push: { items: Item } })
                .populate('items')
                .then(result => {
                    res.json(result);
                })
        });
    },
    deleteItem: function (req, res) {
        // check if item belongs to session user
        db.Item.deleteOne({ _id: req.params.itemId })
    },
    deleteList: function (req, res) {
        db.Item.deleteOne({ _id: req.params.listId })
    },

    editItem: function(req, res) {
        db.Item.findByIdAndUpdate(req.params.itemId, req.body)
            .then(result => {
                res.json(result);
            })
    },
    editList: function(req, res) {
        db.Item.findByIdAndUpdate(req.params.list, req.body)
    },
    logout: function(req, res) {
        req.session.destroy();
    }
}