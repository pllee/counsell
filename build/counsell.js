;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
var counsell = require('./counsell');

window.counsell = counsell;
},{"./counsell":2}],2:[function(require,module,exports){
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
},{}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvaG9tZS9wbGxlZS9kZXYvZ2l0L2NvdW5zZWxsL2xpYi9jb3Vuc2VsbC13ZWIuanMiLCIvaG9tZS9wbGxlZS9kZXYvZ2l0L2NvdW5zZWxsL2xpYi9jb3Vuc2VsbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGNvdW5zZWxsID0gcmVxdWlyZSgnLi9jb3Vuc2VsbCcpO1xuXG53aW5kb3cuY291bnNlbGwgPSBjb3Vuc2VsbDsiLCJ2YXIgbWV0aG9kcyA9IFtcImRlYnVnXCIsIFwiZXJyb3JcIiwgXCJpbmZvXCIsIFwibG9nXCIsIFwid2FyblwiLCBcImRpclwiLCBcImRpcnhtbFwiLCBcInRhYmxlXCIsIFwidHJhY2VcIiwgXCJhc3NlcnRcIiwgXCJjb3VudFwiLCBcIm1hcmtUaW1lbGluZVwiLCBcInByb2ZpbGVcIiwgXCJwcm9maWxlRW5kXCIsIFwidGltZVwiLCBcInRpbWVFbmRcIiwgXCJ0aW1lU3RhbXBcIiwgXCJncm91cFwiLCBcImdyb3VwQ29sbGFwc2VkXCIsIFwiZ3JvdXBFbmRcIiwgXCJjbGVhclwiXSxcbiAgICBjb24gPSBtb2R1bGUuZXhwb3J0cyA9IHt9LFxuICAgIGksXG4gICAgbGVuID0gbWV0aG9kcy5sZW5ndGgsXG4gICAgZW1wdHlGbiA9IGZ1bmN0aW9uKCkge30sXG4gICAgY3JlYXRlQ29uc29sZUZuLFxuICAgIHRpbWVJZHM7XG5cblxuXG5pZiAodHlwZW9mIGNvbnNvbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIGNvblttZXRob2RzW2ldXSA9IGVtcHR5Rm47XG4gICAgfVxufSBlbHNlIHtcbiAgICBjcmVhdGVDb25zb2xlRm4gPSBmdW5jdGlvbihtZXRob2ROYW1lKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY29uc29sZVttZXRob2ROYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb25zb2xlW21ldGhvZE5hbWVdLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIC8vSUVcbiAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlW21ldGhvZE5hbWVdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaWYgKG1ldGhvZE5hbWUgPT09ICdwcm9maWxlRW5kJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihpZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uc29sZVttZXRob2ROYW1lXSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb25zb2xlW21ldGhvZE5hbWVdKGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbXB0eUZuO1xuICAgIH07XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgY29uW21ldGhvZHNbaV1dID0gY3JlYXRlQ29uc29sZUZuKG1ldGhvZHNbaV0pO1xuICAgIH1cblxuICAgIC8vSUVcbiAgICBpZihjb24udGltZSAgPT09IGVtcHR5Rm4pIHtcbiAgICAgICAgdGltZUlkcyA9IHt9O1xuXG4gICAgICAgIGNvbi50aW1lID0gZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgICAgIHRpbWVJZHNbaWRdID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uLnRpbWVFbmQgPSBmdW5jdGlvbihpZCkge1xuICAgICAgICAgICAgdmFyIG1pbGxpcyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdGltZUlkc1tpZF07XG4gICAgICAgICAgICBkZWxldGUgdGltZUlkcy5pZDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCclczogJXNtcycsIGlkLCBtaWxsaXMpO1xuICAgICAgICB9O1xuICAgIH1cbn0iXX0=
;