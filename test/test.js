const chai = require('chai');
const expect = chai.expect;

const app = require('../app')

const http = require('chai-http');
chai.use(http);

describe('App basic tests', () => {
    it('Should exists', () => {
        expect(app).to.be.a('function');
    });

    it('GET / should return 200 and a message', (done) => {

        chai.request(app).get('/').then(res => {

            expect(res).to.have.status(200);
            expect(res.body.message).to.be.equal('Yeezys');

            done();
        }).catch(err => {
            console.log(err);
        });


    });
});

describe('User registration', () => {
    it('Should return 201 and confirmation for valid input', (done) => {
        const userNew = {
            'name': 'John wick',
            'email': 'john@wick.com',
            'password': 'secret'
        }

        chai.request(app).post('/register')
            .send(userNew)
            .then((res) => {
                expect(res).to.have.status(201);
                expect(res.body.message).to.be.equal("User created!");
                expect(res.body.errors.length).to.be.equal(0);
                done();
            }).catch(err => {
                console.log(err.message);
            });
    });
});