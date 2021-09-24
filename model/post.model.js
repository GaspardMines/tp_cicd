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
        this.userId = userId;
    }

}

module.exports=Post