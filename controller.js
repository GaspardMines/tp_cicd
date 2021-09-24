const https = require('https');
const Post = require('./model/post.model.js')
const fs = require("fs");

const posts = [];

module.exports.posts = posts;

const postEndpoints = [];

const initEndpoints = function () {
    postEndpoints.push({endpoint:"https://some-random-api.ml/facts/dog", attr: "fact"});
    postEndpoints.push({endpoint:"https://some-random-api.ml/facts/cat", attr: "fact"});
    postEndpoints.push({endpoint:"https://some-random-api.ml/facts/panda", attr: "fact"});
    postEndpoints.push({endpoint:"https://some-random-api.ml/facts/fox", attr: "fact"});
    postEndpoints.push({endpoint:"https://some-random-api.ml/facts/bird", attr: "fact"});
    postEndpoints.push({endpoint:"https://some-random-api.ml/facts/koala", attr: "fact"});
    postEndpoints.push({endpoint:"https://evilinsult.com/generate_insult.php?lang=en&type=json", attr: "insult"});
    postEndpoints.push({endpoint:"https://some-random-api.ml/joke", attr: "joke" });
    postEndpoints.push({endpoint:"https://friends-quotes-api.herokuapp.com/quotes/random", attr: "quote" });
};


const createRandomPost = function (userId) {

    let date = new Date();
    let nbLikes = Math.floor(Math.random() * 100000);

    let randomEndpoint = postEndpoints[Math.floor(Math.random() * postEndpoints.length)];

    const req = https.request(randomEndpoint.endpoint, res => {
        let data = '';
        res.on('data', (chunk) => {
            data = data + chunk.toString();
        });
        res.on('end', () => {
            const body = JSON.parse(data);
            let content = body[randomEndpoint.attr];
            posts.push(new Post(content, date, nbLikes, userId));
        });
    });
    req.on('error', (error) => {
        console.error(error);
    });
    req.end();

};

module.exports.createRandomPost = createRandomPost;

initEndpoints();
function createBaseUser(){
    let userList = require('./userList.json')
    if(!userList.hasOwnProperty("users")){
        var obj = {
            users: []
        };
        //Todo : utiliser les méthodes de création d'user et de création de post pour remplir le obj
        /*
        for(int i = 0; i<50; i++){
            //todo créer un user
            <methode creation user>
            //todo ajout post à cet user
            for(int j = 0; j<3; j++){
              <methode creation post>
              user.Posts.push(post);
            }
            obj.users.push(user);
        }
        */
        var json = JSON.stringify(obj);
        var fs = require('fs');
        fs.writeFile('userList.json', json, 'utf8', function writeFileCallback(err, data){});
    }
}

function getAllPost(){
    let userList = [];
    let posts = []
    userList = require('./userList.json')
    userList.users.forEach(user => {
        user.Posts.forEach(post => {
            posts.push(post);
        })
    })
    return posts;
}
