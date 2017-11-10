var assert = require('assert');
describe('Check variables', function() {
    it('Variable "name" should be equal to "Alex"', function() {
        assert.equal(name, 'Alex');
    });
    it('Variable "name2" should be equal to "name2"', function() {
        assert.equal(name2, 'name2');
    });
    it('Variable "__firstName" should be equal to "John"', function() {
        assert.equal(__firstName, 'John');
    });
    it('Variable "last_name" should be equal to "LastName"', function() {
        assert.equal(last_name, 'LastName');
    });
    it('Variable "_" should be true', function() {
        assert.equal(_, true);
    });
    it('Variable "i_am_an_error_too_delete_me" should be equal to "if you can"', function() {
        assert.equal(i_am_an_error_too_delete_me, 'if you can');
    });
    it('Variable "iAmOneOfTheMostBiggestVariablesInThisWorld" should be equal to "Do not repeat this sh** at home"', function() {
        assert.equal(iAmOneOfTheMostBiggestVariablesInThisWorld, 'Do not repeat this sh** at home');
    });
    it('Variable "$" should be equal to 1', function() {
        assert.equal($, 1);
    });
    it('Variable "$role" should be equal to "User"', function() {
        assert.equal($role, 'User');
    });
    it('Variable "weHave10VariablesHere" should be equal to "am i right?"', function() {
        assert.equal(weHave10VariablesHere, 'am i right?');
    });
});