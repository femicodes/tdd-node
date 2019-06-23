let chai = require('chai');
const expect = chai.expect;

const app = require('../app');


describe('App', () => {

    it('Should exists', () => {
        expect(app).to.be.a('function');
    });

});
