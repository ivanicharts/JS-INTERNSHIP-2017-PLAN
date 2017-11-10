var assert = require('assert');
describe('Check variables', function() {
    it('Variable "thisIsNumber" should be a number', function() {
        assert.equal(typeof thisIsNumber, 'number');
    });
    it('Variable "thisIsString" should be a string', function() {
        assert.equal(typeof thisIsString, 'string');
    });
    it('Variable "thisIsBoolean" should be a boolean variable', function() {
        assert.equal(typeof thisIsBoolean, 'boolean');
    });
    it('Variable "thisIsObject" should be an object', function() {
        assert.equal(typeof thisIsObject, 'object');
    });
    it('Variable "undefiendOne" should be undefined', function() {
        assert.equal(typeof undefiendOne, 'undefined');
    });
    it('Variable "typeOfObject" should be a string', function() {
        assert.equal(typeof typeOfObject, answer);
    });
});