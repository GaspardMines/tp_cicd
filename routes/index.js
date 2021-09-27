var express = require('express');
var router = express.Router();
var controller = require('../controller.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  controller.createBaseUser().then( (done) => {
    if(done)
      res.status(200).redirect('http://localhost:3000');
    else{
      const listPosts = controller.getAllPost();
      res.render('index', { title: 'Express', listPosts: listPosts })
    }
  })

});

module.exports = router;
