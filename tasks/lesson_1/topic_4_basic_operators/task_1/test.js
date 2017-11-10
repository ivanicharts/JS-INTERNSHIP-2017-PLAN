var assert = require('assert');
describe('Check variables', function() {
    it('Variable "answer1" should be equal to "45"', function() {
        assert.equal(answer1, '45');
    });
    it('Variable "answer2" should be equal to 8', function() {
        assert.equal(answer2, 8);
    });
    it('Variable "answer3" should be equal to "little object"', function() {
        assert.equal(answer3, 'little object');
    });
    it('Variable "answer4" should be equal to 28', function() {
        assert.equal(answer4, 28);
    });
});