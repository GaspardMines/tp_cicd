const https = require('https');


const options = {
    hostname: 'https://randomuser.me',
    port: 443,
    path: '/api',
    method: 'GET'
}

let User = class{
    constructor(){

        this.id;
        this.name;
        this.surname;
        this.birthdate;
        this.postcode;
        this.photo;
        this.Posts;
        this.email;
        this.username;
        this.accountCreation;
        this.phoneNumber;
        this.gender;
    }
}