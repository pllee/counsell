var cons = require('../lib/counsell'),
    expect = require('expect.js'),
    supportedMethods = ["debug", "error", "info", "log", "warn", "dir", "dirxml", "table", "trace", "assert", "count", "markTimeline", "profile", "profileEnd", "time", "timeEnd", "timeStamp", "group", "groupCollapsed", "groupEnd", "clear"];

describe('counsell', function() {
    var i = 0,
        len = supportedMethods.length,
        createRunConsoleFn = function(methodName) {
            return function() {
                cons.log('calling ' + methodName);
                cons[methodName]('a');
            };
        };

    for (; i < len; ++i) {
        methodName = supportedMethods[i];
        it('call method ' + methodName, createRunConsoleFn(methodName));
    }
});