const db = require('../models');

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
            //req.sessions.user = user._id
            // send the OK
            res.json(user);
          })
          // Otherwise, user exists. Send 'OK'
        } else {
          // set the session user to the ID
          //req.session.user = result._id
          // send the OK
          res.json(result);
        }
      })
  },

  getAllLists: function (req, res) {

    //let user = req.session.user
    // find the user user
    //console.log(req.params.userid);
    db.List.find({ _userId: req.params.userid })
      // populate his/her lists
      //.populate('lists')
      .then(result => {
        res.json(result)
      });
  },
  getList: function (req, res) {
    let list = req.params.list
    db.List.find({ _id: list })
      //.populate('items')
      .then(result => {
        res.json(result)
      });
  },
  createList: function (req, res) {
    //let user = req.session.user

    db.List.create(req.body).then(List => {
      res.json(List);
      // db.User.findOneAndUpdate({ _userId: req._userId }, { $push: { lists: List } }).populate('lists').then(User => {
      //     res.json(User)
      // });
    })
  },
  addItem: function (req, res) {

    db.Item.create(req.body).then(Item => {
      // db.List.findOneAndUpdate({ _id: req.params.listId }, { $push: { items: Item } })
      //     .populate('items')
      //     .then(result => {
      //         res.json(result);
      //     })
      res.json(Item);
    });
  },
  getAllItems: function (req, res) {
    db.Item.find({ _listId: req.params.listid }).then(Items => {
      res.json(Items);
    })
  },
  deleteItem: function (req, res) {
    // check if item belongs to session user
    db.Item.deleteOne({ _id: req.params.itemId }).then(() => {
      res.json({ "success": "true" })
    })
  },

  deleteList: function (req, res) {
    db.List.deleteOne({ _id: req.params.listId })
      .then(() => {
      })
    db.Item.deleteMany({ _listId: req.params.listId })
      .then(result => {
        res.json({ "success": "true" })
      })
  },
  editItem: function (req, res) {
    db.Item.findByIdAndUpdate(req.params.itemId, req.body)
      .then(result => {
        res.json(result);
      })
  },
  editList: function (req, res) {
    db.List.findByIdAndUpdate(req.params.list, req.body)
    .then(result => {
      res.json(result);
    })
  },
  logout: function (req, res) {
    req.session.destroy();
  }
}