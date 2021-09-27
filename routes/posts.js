var express = require('express');
var router = express.Router();
var controller = require('../controller.js');

/* GET a post listing. */
router.get('/updatelike', (req, res) =>{
    let userId = req.query.userId;
    let id = req.query.id;
    controller.updateLike(userId, id);
    var listPosts = controller.getAllPost();
    res.status(200).redirect('http://localhost:3000');
});

router.get('/new', function(req, res, next) {
    let userId = req.query.userId;
    controller.addPostByUserId(userId).then((myuser) => {
        res.status(200).redirect('http://localhost:3000/users/id?userId=' + myuser.id);
    })
});

module.exports = router;