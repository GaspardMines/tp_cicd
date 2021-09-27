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

    }

    static async build() {
        let obj = new User();
        await obj.getData();
        return obj;
    }

    async getData() {
        return new Promise(async (resolve, reject) => {
            const req = https.request('https://randomuser.me/api', res => {
                let data = '';
                res.on('data', (chunk) => {
                    data = data + chunk.toString();
                });
                res.on('end', async () => {
                    const body = JSON.parse(data).results[0];
                    this.id = body.login.uuid;
                    this.name = body.name.first;
                    this.surname = body.name.last;
                    this.postcode = body.location.postcode;
                    this.accountCreation = body.registered.date;
                    this.birthdate = body.dob.date;
                    this.photo = body.picture.medium;
                    this.username = body.login.username;
                    this.email = body.email;
                    this.phoneNumber = body.cell;
                    this.gender = body.gender;

                    this.Posts = [];
                    for (let i = 0; i < 5; i++) {
                        let p = await Post.build(this.id);
                        this.Posts.push(p);
                    }

                    resolve();

                });
            });
            req.on('error', (error) => {
                console.log('An error', error);
            });
            req.end();
        });
    }



}

module.exports = User;