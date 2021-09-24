const https = require('https');

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
    constructor(id, name, surname, birthdate, postcode, photo, email, username, accountCreation, phoneNumber, gender){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.birthdate = birthdate;
        this.postcode = postcode;
        this.photo = photo;
        this.email = email;
        this.username = username;
        this.accountCreation = accountCreation;
        this.phoneNumber = phoneNumber;
        this.gender = gender;
    }
}