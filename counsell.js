;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
var counsell = require('./counsell');

window.counsell = counsell;
},{"./counsell":2}],2:[function(require,module,exports){
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
},{}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvaG9tZS9wbGxlZS9kZXYvZ2l0L2NvdW5zZWxsL2xpYi9jb3Vuc2VsbC13ZWIuanMiLCIvaG9tZS9wbGxlZS9kZXYvZ2l0L2NvdW5zZWxsL2xpYi9jb3Vuc2VsbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbInZhciBjb3Vuc2VsbCA9IHJlcXVpcmUoJy4vY291bnNlbGwnKTtcblxud2luZG93LmNvdW5zZWxsID0gY291bnNlbGw7IiwidmFyIG1ldGhvZHMgPSBbXCJkZWJ1Z1wiLCBcImVycm9yXCIsIFwiaW5mb1wiLCBcImxvZ1wiLCBcIndhcm5cIiwgXCJkaXJcIiwgXCJkaXJ4bWxcIiwgXCJ0YWJsZVwiLCBcInRyYWNlXCIsIFwiYXNzZXJ0XCIsIFwiY291bnRcIiwgXCJtYXJrVGltZWxpbmVcIiwgXCJwcm9maWxlXCIsIFwicHJvZmlsZUVuZFwiLCBcInRpbWVcIiwgXCJ0aW1lRW5kXCIsIFwidGltZVN0YW1wXCIsIFwiZ3JvdXBcIiwgXCJncm91cENvbGxhcHNlZFwiLCBcImdyb3VwRW5kXCIsIFwiY2xlYXJcIl0sXG4gICAgY29uID0gbW9kdWxlLmV4cG9ydHMgPSB7fSxcbiAgICBpLFxuICAgIGxlbiA9IG1ldGhvZHMubGVuZ3RoLFxuICAgIGVtcHR5Rm4gPSBmdW5jdGlvbigpIHt9LFxuICAgIGdDb25zb2xlLFxuICAgIGNyZWF0ZUNvbnNvbGVGbixcbiAgICB0aW1lSWRzO1xuXG5cblxuaWYgKHR5cGVvZiBjb25zb2xlID09PSAndW5kZWZpbmVkJykge1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICBjb25bbWV0aG9kc1tpXV0gPSBlbXB0eUZuO1xuICAgIH1cbn0gZWxzZSB7XG4gICAgZ0NvbnNvbGUgPSBjb25zb2xlO1xuICAgIGNyZWF0ZUNvbnNvbGVGbiA9IGZ1bmN0aW9uKG1ldGhvZE5hbWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBnQ29uc29sZVttZXRob2ROYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnQ29uc29sZVttZXRob2ROYW1lXS5hcHBseShnQ29uc29sZSwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgLy9JRVxuICAgICAgICBpZiAodHlwZW9mIGdDb25zb2xlW21ldGhvZE5hbWVdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaWYgKG1ldGhvZE5hbWUgPT09ICdwcm9maWxlRW5kJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihpZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ0NvbnNvbGVbbWV0aG9kTmFtZV0oKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdDb25zb2xlW21ldGhvZE5hbWVdKGlkKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZW1wdHlGbjtcbiAgICB9O1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIGNvblttZXRob2RzW2ldXSA9IGNyZWF0ZUNvbnNvbGVGbihtZXRob2RzW2ldKTtcbiAgICB9XG5cbiAgICAvL0lFXG4gICAgaWYoY29uLnRpbWUgID09PSBlbXB0eUZuKSB7XG4gICAgICAgIHRpbWVJZHMgPSB7fTtcblxuICAgICAgICBjb24udGltZSA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgICAgICB0aW1lSWRzW2lkXSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbi50aW1lRW5kID0gZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgICAgIHZhciBtaWxsaXMgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRpbWVJZHNbaWRdO1xuICAgICAgICAgICAgZGVsZXRlIHRpbWVJZHMuaWQ7XG4gICAgICAgICAgICBnQ29uc29sZS5sb2coJyVzOiAlc21zJywgaWQsIG1pbGxpcyk7XG4gICAgICAgIH07XG4gICAgfVxufSJdfQ==
;