var express = require('express');
var router = express.Router();
var controller = require('../controller.js');

/* GET users listing. */
router.get('/id', function(req, res, next) {
  let userId = req.query.userId;
  console.log(userId);
  let userList = [];
  let myuser;
  userList = require('../userList.json')
  userList.users.forEach(user => {
    console.log(user.id)
    if(user.id == userId)
      myuser = user
    })
  res.render('user', { title: 'Express', user: myuser })
});

router.get('/new', function(req, res, next) {
  controller.addUser().then((myuser) => {
    res.status(200).redirect('http://localhost:3000/users/id?userId=' + myuser.id);
  })
});

module.exports = router;
