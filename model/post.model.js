const https = require('https');

let Post = class{
    id;
    content;
    date;
    userId;
    nbLikes;
    constructor(id, content, date, userId, nbLikes){
        this.id = id;
        this.content = content;
        this.date = date;
        this.userId = userId;
        this.nbLikes = nbLikes;
        this.userId = userId;
    }

}

module.exports=Post