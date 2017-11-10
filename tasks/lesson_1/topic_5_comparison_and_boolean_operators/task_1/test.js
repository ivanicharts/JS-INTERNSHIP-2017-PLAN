var assert = require('assert');

describe('Check variables', function() {
    var caseList = [5, 'some string', [1, 2, 3], 'lets go', 4, {'key': 4}, 3, true, 'Titanium', 11];

    for (var i in caseList) {
        if (typeof caseList[i] === 'number') {
            var caseTitle = 'Variable "a" is a number and is equal to ' + caseList[i];
            it(caseTitle, function () {
                assert.equal(comparison(caseList[i]), caseTitle);
            });
        } else if (typeof caseList[i] === 'string') {
            var caseTitle = 'Variable "a" is a string and is equal to "' + caseList[i] + '"';
            it(caseTitle, function () {
                assert.equal(comparison(caseList[i]), caseTitle);
            });
        } else {
            var caseTitle = 'Variable "a" is not a number or a string';
            it(caseTitle, function () {
                assert.equal(comparison(caseList[i]), caseTitle);
            });
        }
    }
});