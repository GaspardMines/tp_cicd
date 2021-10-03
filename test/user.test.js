const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app")
var controller = require('../controller.js');

chai.use(chaiHttp);
chai.should();
describe("user test", () => {
    describe("GET a specific user", () => {
        // Test
        it("should be getting the html page", (done) => {
            let userList = require('../userList.json');
            let userId = userList.users[0].id;
            chai.request(app)
                .get('/users/id?userId='+userId)
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
            chai.expect(likeafter).to.equal(likebefore+1);
            done();
        });
    });
});
