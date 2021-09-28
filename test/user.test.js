const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app")

chai.use(chaiHttp);
chai.should();describe("user test", () => {
    describe("GET a specific user", () => {
        // Test
        it("should be getting the html page", (done) => {
            chai.request(app)
                .get('/users/id?userId=b0bc44d1-85e9-423e-ac20-ec33556efbcc')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.text.should.be.a('string');
                    done();
                });
        });
    });

});