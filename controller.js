const https = require('https');
const Post = require('./model/post.model.js')
const fs = require("fs");

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

function updateLike(userId, id){
    let userList = [];
    userList = require('./userList.json');
    userList.users.forEach(user => {
        if(user.id == userId){
            user.Posts.forEach(post => {
                    console.log(post);
                if(post.id == id){
                    post.nbLikes = post.nbLikes + 1;
                }
                    console.log(post);
            })
        }
    })
    var json = JSON.stringify(userList);
    var fs = require('fs');
    fs.writeFile('userList.json', json, 'utf8', function writeFileCallback(err, data){});
}
module.exports = {createBaseUser, updateLike}