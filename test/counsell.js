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

if (typeof console !== undefined) {
    //node does not allow overwrite of global console
    console = cons;
    if (console === cons) {
        describe('console rename', function() {
            console = cons;
            var i = 0,
                len = supportedMethods.length,
                createRunConsoleFn = function(methodName) {
                    return function() {
                        console.log('calling ' + methodName);
                        console[methodName]('a');
                    };
                };

            for (; i < len; ++i) {
                methodName = supportedMethods[i];
                it('call console method ' + methodName, createRunConsoleFn(methodName));
            }
        });
    }
}