const https = require('https');
const Post = require('./post.model.js');

let User = class{
    postcode;
    birthdate;
    surname;
    name;
    id;
    photo;
    Posts = [];
    email;
    username;
    accountCreation;
    phoneNumber;
    gender;

    constructor(){
        this.getData();
    }

    getData(){
        const req = https.request('https://randomuser.me/api', res => {
            let data = '';
            res.on('data', (chunk) => {
                data = data + chunk.toString();
            });
            res.on('end', () => {
                const body = JSON.parse(data).results[0];
                this.id = body.login.uuid;
                this.name = body.name.first;
                this.surname = body.name.last;
                this.postcode = body.location.postcode;
                this.accountCreation = body.registered.date;
                this.birthdate = body.dob.date;
                this.photo = body.picture.medium;
                this.username= body.login.username;
                this.email= body.email;
                this.phoneNumber= body.cell;
                this.gender = body.gender;

                this.Posts = [];
                let nbPosts = Math.floor(Math.random * 7) + 3; //creates between 3 et 10 posts randomly
                for (var i = 0; i < nbPosts; i++) {
                    this.Posts.push(new Post(this.id));
                }
                
            });
        });
        req.on('error', (error) => {
            console.log('An error', error);
        });
        req.end();
    }



}

module.exports={
    User
}