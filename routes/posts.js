var express = require('express');
var router = express.Router();
var controller = require('../controller.js');

/* GET a post listing. */
router.get('/updatelike', (req, res) =>{
    console.log(req.query);
    let userId = req.query.userId;
    let id = req.query.id;
    controller.updateLike(userId, id);
    var listPosts = controller.getAllPost();
    res.status(200).redirect('http://localhost:3000');
});


module.exports = router;