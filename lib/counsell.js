var methods = ["debug", "error", "info", "log", "warn", "dir", "dirxml", "table", "trace", "assert", "count", "markTimeline", "profile", "profileEnd", "time", "timeEnd", "timeStamp", "group", "groupCollapsed", "groupEnd", "clear"],
    con = module.exports = {},
    i,
    len = methods.length,
    emptyFn = function() {},
    gConsole,
    createConsoleFn,
    timeIds;



if (typeof console === 'undefined') {
    for (i = 0; i < len; ++i) {
        con[methods[i]] = emptyFn;
    }
} else {
    gConsole = console;
    createConsoleFn = function(methodName) {
        if (typeof gConsole[methodName] === 'function') {
            return function() {
                return gConsole[methodName].apply(gConsole, arguments);
            };
        }
        //IE
        if (typeof gConsole[methodName] === 'object') {
            if (methodName === 'profileEnd') {
                return function(id) {
                    return gConsole[methodName]();
                };
            }
            return function(id) {
                return gConsole[methodName](id);
            };
        }

        return emptyFn;
    };

    for (i = 0; i < len; ++i) {
        con[methods[i]] = createConsoleFn(methods[i]);
    }

    //IE
    if(con.time  === emptyFn) {
        timeIds = {};

        con.time = function(id) {
            timeIds[id] = new Date().getTime();
        };

        con.timeEnd = function(id) {
            var millis = new Date().getTime() - timeIds[id];
            delete timeIds.id;
            gConsole.log('%s: %sms', id, millis);
        };
    }
}