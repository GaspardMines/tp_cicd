const https = require('https');

let Post = class{
    content;
    date;
    nbLikes;
    userId;
    constructor(content, date, nbLikes, userId){
        this.content = content;
        this.date = date;
        this.nbLikes = nbLikes;
        this.userid = userId;
    }

    getData() {
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
                this.username = body.login.username;
                this.email = body.email;
                this.phoneNumber = body.cell;
                this.gender = body.gender;
                this.Posts = [];
            });
        });
        req.on('error', (error) => {
            console.log('An error', error);
        });
        req.end();
    }
}

module.exports=Post