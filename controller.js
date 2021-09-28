const https = require('https');
const Post = require('./model/post.model.js');
const User = require('./model/user.model.js');
const fs = require("fs");

async function createBaseUser() {
    return new Promise(async (resolve, reject) => {
        var fs = require('fs');
        if (!fs.existsSync('./userList.json')) {
            var obj = {
                users: []
            };
            for (let i = 0; i < 1; i++) {
                let user = await User.build();
                obj.users.push(user);
            }
            var json = JSON.stringify(obj);
            fs.writeFileSync('userList.json', json, 'utf8', function writeFileCallback(err, data) { });
            resolve(true);
        }
        else
            resolve(false);
    });
}

async function addUser(){
    return new Promise(async (resolve, reject) => {
        var userList = require('./userList.json')
        var myuser = await User.build();
        userList.users.push(myuser)
        var json = JSON.stringify(userList);
        fs.writeFileSync('userList.json', json, 'utf8', function writeFileCallback(err, data) {
        });
        resolve(myuser);
    });
}

async function addPostByUserId(userId){
    return new Promise(async (resolve, reject) => {
        var userList = require('./userList.json')
        var myuser;
        for (const user of userList.users) {
            if(user.id == userId){
                console.log(userId)
                var newPost = await Post.build(userId);
                myuser = user;
                user.Posts.push(newPost);
            }
        }
        var json = JSON.stringify(userList);
        fs.writeFileSync('userList.json', json, 'utf8', function writeFileCallback(err, data) {
        });
        resolve(myuser);
    });
}

function getAllPost(){
    let userList = [];
    let posts = []
    userList = require('./userList.json')
    console.log(userList);
    userList.users.forEach(user => {
        user.Posts.forEach(post => {
            posts.push(post);
        })
    })
    return posts;
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
module.exports = {getAllPost, createBaseUser, updateLike, addUser, addPostByUserId}
