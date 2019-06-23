const chai = require('chai');
const expect = chai.expect;

const app = require('../app')

const http = require('chai-http');
chai.use(http);

describe('App basic tests', () => {
    it('Should exists', () => {
        expect(app).to.be.a('function');
    })

    it('GET / should return 200 and a message', (done) => {

        chai.request(app).get('/').then(res => {

            expect(res).to.have.status(200);
            expect(res.body.message).to.be.equal('Yeezys')

            done();
        }).catch(err => {
            console.log(err);
        });


    })
})

