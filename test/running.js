const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app")

chai.use(chaiHttp);
chai.should();describe("running", () => {
    describe("GET /", () => {
        // Test
        it("should be running", (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });
});
