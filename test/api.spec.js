/* eslint-disable no-unused-vars */
/**
 * Created by brett.hadley on 10/10/2016.
 */
const expect = require('chai').expect;
const getVehicles = require('../src/api').getVehicles;
const getVehicle = require('../src/api').getVehicle;
const server = require('../server');

describe("getData example test", function() {
    beforeEach(() => {
        server.listen(9988);
    });

    it('should respond with an array of vehicles', (done) => {
        getVehicles((response) => {
            const data = response.data;
            expect(Array.isArray(data)).to.equal(true);
            done();
        })
    })

    it('should respond have at least one of the given keys', (done) => {
        const url = '/api/vehicle/xe';
        getVehicle(url, (response) => {
            const data = response.data;
            expect(data).to.be.a('object');
            expect(data).to.include.all.keys('description', 'price');
            done();
        })
    })
});
