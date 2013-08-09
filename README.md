counsell
========
[![browser support](https://ci.testling.com/pllee/counsell.png)](https://ci.testling.com/pllee/counsell)

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

[![Craig Counsell](http://creamcitycables.files.wordpress.com/2011/11/counsell.jpg)


