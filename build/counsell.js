;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
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
        if (console[methodName]) {
            return function() {
                return console[methodName].apply(console, arguments);
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
            console.log('%s: %sms', id, millis);
        };
    }
}
},{}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvaG9tZS9wbGxlZS9kZXYvZ2l0L2NvdW5zZWxsL2xpYi9jb3Vuc2VsbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbInZhciBtZXRob2RzID0gW1wiZGVidWdcIiwgXCJlcnJvclwiLCBcImluZm9cIiwgXCJsb2dcIiwgXCJ3YXJuXCIsIFwiZGlyXCIsIFwiZGlyeG1sXCIsIFwidGFibGVcIiwgXCJ0cmFjZVwiLCBcImFzc2VydFwiLCBcImNvdW50XCIsIFwibWFya1RpbWVsaW5lXCIsIFwicHJvZmlsZVwiLCBcInByb2ZpbGVFbmRcIiwgXCJ0aW1lXCIsIFwidGltZUVuZFwiLCBcInRpbWVTdGFtcFwiLCBcImdyb3VwXCIsIFwiZ3JvdXBDb2xsYXBzZWRcIiwgXCJncm91cEVuZFwiLCBcImNsZWFyXCJdLFxuICAgIGNvbiA9IG1vZHVsZS5leHBvcnRzID0ge30sXG4gICAgaSxcbiAgICBsZW4gPSBtZXRob2RzLmxlbmd0aCxcbiAgICBlbXB0eUZuID0gZnVuY3Rpb24oKSB7fSxcbiAgICBjcmVhdGVDb25zb2xlRm4sXG4gICAgdGltZUlkcztcblxuXG5cbmlmICh0eXBlb2YgY29uc29sZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgY29uW21ldGhvZHNbaV1dID0gZW1wdHlGbjtcbiAgICB9XG59IGVsc2Uge1xuICAgIGNyZWF0ZUNvbnNvbGVGbiA9IGZ1bmN0aW9uKG1ldGhvZE5hbWUpIHtcbiAgICAgICAgaWYgKGNvbnNvbGVbbWV0aG9kTmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uc29sZVttZXRob2ROYW1lXS5hcHBseShjb25zb2xlLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbXB0eUZuO1xuICAgIH07XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgY29uW21ldGhvZHNbaV1dID0gY3JlYXRlQ29uc29sZUZuKG1ldGhvZHNbaV0pO1xuICAgIH1cblxuICAgIC8vSUVcbiAgICBpZihjb24udGltZSAgPT09IGVtcHR5Rm4pIHtcbiAgICAgICAgdGltZUlkcyA9IHt9O1xuXG4gICAgICAgIGNvbi50aW1lID0gZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgICAgIHRpbWVJZHNbaWRdID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uLnRpbWVFbmQgPSBmdW5jdGlvbihpZCkge1xuICAgICAgICAgICAgdmFyIG1pbGxpcyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdGltZUlkc1tpZF07XG4gICAgICAgICAgICBkZWxldGUgdGltZUlkcy5pZDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCclczogJXNtcycsIGlkLCBtaWxsaXMpO1xuICAgICAgICB9O1xuICAgIH1cbn0iXX0=
;