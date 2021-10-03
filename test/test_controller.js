const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app")
var controller = require('../controller.js');
const assertArrays = require('chai-arrays');
chai.use(assertArrays);
chai.use(chaiHttp);
chai.should();


describe("user test", () => {

    describe("create the database", () => {
        it("should add a few users in the database", async () => {
            await controller.createBaseUser();
            userList = require('../userList.json');
            let nbUserafter = userList.users.length;
            chai.expect(nbUserafter).to.be.above(0);
        });
    });


    describe("GET a specific user", () => {
        // Test
        it("should be getting the html page", (done) => {
            let userList = require('../userList.json');
            let userId = userList.users[0].id;
            chai.request(app)
                .get('/users/id?userId=' + userId)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.text.should.be.a('string');
                    done();
                });
        });
    });

    describe("Like a user post", () => {
        it("should add one to the like count", (done) => {
            let userList = require('../userList.json');
            let userId = userList.users[0].id;
            let id = userList.users[0].Posts[0].id;
            let likebefore = userList.users[0].Posts[0].nbLikes;
            controller.updateLike(userId, id);
            userList = require('../userList.json');
            let likeafter = userList.users[0].Posts[0].nbLikes;
            chai.expect(likeafter).to.equal(likebefore + 1);
            done();
        });
    });


    describe("add post", () => {
        it("should add a post to a specific user", async () => {
            let userList = require('../userList.json');
            let userId = userList.users[0].id;
            let nbPostbefore = userList.users[0].Posts.length;
            await controller.addPostByUserId(userId);
            userList = require('../userList.json');
            let nbPostafter = userList.users[0].Posts.length;
            chai.expect(nbPostafter).to.equal(nbPostbefore + 1);
        });
    });

    describe("add user", () => {
        it("should add a user in the database", async () => {
            let userList = require('../userList.json');
            let nbUserbefore = userList.users.length;
            await controller.addUser();
            userList = require('../userList.json');
            let nbUserafter = userList.users.length;
            chai.expect(nbUserafter).to.equal(nbUserbefore + 1);
        });
    });

    describe("get all existing posts", () => {
        it("should return all existing posts in the database", (done) => {
            let posts = controller.getAllPost();
            chai.expect(posts[0]).to.not.be.undefined;
            chai.expect(posts).to.be.array();
            done();
        });
    });

});
