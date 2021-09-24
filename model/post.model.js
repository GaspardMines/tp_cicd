const https = require('https');

let Post = class{
    content;
    date;
    titre;
    nbLikes;
    constructor(content, date, titre, nbLikes){
        this.content = content;
        this.date = date;
        this.titre = titre;
        this.nbLikes = nbLikes;
    }
}