var assert = require('assert');

describe('Check variables', function() {
    var caseList = [0, 5, 10, 100, 1000];

    for (var i in caseList) {
        var caseTitle = 'Variable "a" is equal to ' + caseList[i],
            sum = 0;
        for (var j=1; j<= caseList[i]; j++) {
            sum += j;
        }
        it(caseTitle, function () {
            assert.equal(loopsQuest(caseList[i]), sum);
        });
    }
});