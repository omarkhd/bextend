# bextend

----
## what is bextend?

> bextend is the Backbone extend function helper wrapped in a Node.js module.

----
## install
	npm install bextend --save

----
## usage
	var extend = require('bextend');
	
	var SomeClass = function() {};
	SomeClass.extend = extend;
	
	SomeClass.prototype = {
		someMethod = function() {}
	};
	
	SomeOtherClass = SomeClass.extend({
		otherMethod = function() {}
	});

----
## thanks
* [lodash](https://lodash.com)
* [backbone](http://backbonejs.org)

