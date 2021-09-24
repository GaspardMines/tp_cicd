var express = require('express');
var router = express.Router();
var controller = require('../controller.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  var listPosts = controller.getAllPost();
  res.render('index', { title: 'Express', listPosts: listPosts });
});

module.exports = router;
