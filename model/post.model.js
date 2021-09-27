const https = require('https');
const { isNullOrUndefined } = require('util');

const postEndpoints = [];


postEndpoints.push({ endpoint: "https://some-random-api.ml/facts/dog", attr: "fact" });
postEndpoints.push({ endpoint: "https://some-random-api.ml/facts/cat", attr: "fact" });
postEndpoints.push({ endpoint: "https://some-random-api.ml/facts/panda", attr: "fact" });
postEndpoints.push({ endpoint: "https://some-random-api.ml/facts/fox", attr: "fact" });
postEndpoints.push({ endpoint: "https://some-random-api.ml/facts/bird", attr: "fact" });
postEndpoints.push({ endpoint: "https://some-random-api.ml/facts/koala", attr: "fact" });
postEndpoints.push({ endpoint: "https://evilinsult.com/generate_insult.php?lang=en&type=json", attr: "insult" });
postEndpoints.push({ endpoint: "https://some-random-api.ml/joke", attr: "joke" });
postEndpoints.push({ endpoint: "https://friends-quotes-api.herokuapp.com/quotes/random", attr: "quote" });

let Post = class{
    id;
    content;
    date;
    userId;
    nbLikes;
    constructor(userId) {

        if (userId == undefined) throw new TypeError("Error: no user ID has been provided");

        this.id = new Date().valueOf();
        this.userId = userId;
        this.nbLikes = Math.floor(Math.random() * 100000);


    }

    static async build(userId) {
        let obj = new Post(userId);
        await obj.initContent();
        return obj;
    }

    initContent() {
        return new Promise((resolve, reject) => {
            let randomEndpoint = postEndpoints[Math.floor(Math.random() * postEndpoints.length)];
            const req = https.request(randomEndpoint.endpoint, res => {
                let data = '';
                res.on('data', (chunk) => {
                    data = data + chunk.toString();
                });
                res.on('end', () => {
                    const body = JSON.parse(data);
                    this.date = new Date();
                    this.content = body[randomEndpoint.attr];
                    resolve();
                });
            });
            req.on('error', (error) => {
                console.error(error);
            });
            req.end();
        });
    }

}

module.exports = Post