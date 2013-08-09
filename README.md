counsell
========
[![browser support](https://ci.testling.com/pllee/counsell.png)](https://ci.testling.com/pllee/counsell)

[Run tests](http://pllee.github.io/counsell/pages/testRunner/) <br>  The tests are currently passing for all browsers. 


[![Build Status](https://secure.travis-ci.org/pllee/counsell.png)](http://travis-ci.org/pllee/counsell)

The following methods will be called if implemented, if they are not implemented or the console does not exist a "noop" will be called.  It also deals with cross browser inconsistencies for console.profile.  counsell.time is implemented to work in IE.

* debug
* error
* info
* log
* warn
* dir
* dirxml
* table
* trace
* assert
* count
* markTimeline
* profile
* profileEnd
* time
* timeEnd
* timeStamp
* group
* groupCollapsed
* groupEnd
* clear

The counsell object will be added to the global in browser environments
```js
counsell.log('a');
counsell.profile('a');
counsell.profileEnd('a');
```
That code can run on all environments including node (console.profile does not exist in node) and works with browserify.

If you don't like using counsell as a global just set console to the global counsell.

If you like this tiny libary please checkout [Luc JS](https://github.com/pllee/luc) and give some positive or negative feedback.

```js
console = counsell;
//In IE
console.time('a') ...
```

[![Craig Counsell](http://creamcitycables.files.wordpress.com/2011/11/counsell.jpg)


