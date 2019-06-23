let chai = require('chai');
const expect = chai.expect;
const http = require('chai-http');
chai.use(http);

const app = require('../app');


describe('App', () => {

    it('Should exist', () => {
        expect(app).to.be.a('function');
    });

    it('GET / should return 200 and message', (done) => {
        //send a request to the app
        chai.request(app).get('/')
            .then((res) => {
                expect(res).to.have.status(200);
                expect(res.body.message).to.contain('Yeezys');
                done();
            }).catch(err => {
                console.log(err.message);
            });
    });

});
