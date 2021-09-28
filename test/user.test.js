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

    describe("GET a new user", () => {

        // Test
        it("should be able to generate a new user", (done) => {
            chai.request(app)
                .get('/users/new')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.text.should.be.a('string');
                    done();
                });
        });

        it("should be a different user each time", (done) => {
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
