var methods = ["debug", "error", "info", "log", "warn", "dir", "dirxml", "table", "trace", "assert", "count", "markTimeline", "profile", "profileEnd", "time", "timeEnd", "timeStamp", "group", "groupCollapsed", "groupEnd", "clear"],
    con = module.exports = {},
    i,
    len = methods.length,
    emptyFn = function() {},
    createConsoleFn,
    timeIds;



if (typeof console === 'undefined') {
    for (i = 0; i < len; ++i) {
        con[methods[i]] = emptyFn;
    }
} else {
    createConsoleFn = function(methodName) {
        if (typeof console[methodName] === 'function') {
            return function() {
                return console[methodName].apply(console, arguments);
            };
        }
        //IE
        if (typeof console[methodName] === 'object') {
            if (methodName === 'profileEnd') {
                return function(id) {
                    return console[methodName]();
                }
            }
            return function(id) {
                return console[methodName](id);
            }
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
            console.log('%s: %sms', id, millis);
        };
    }
}