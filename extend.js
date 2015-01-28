'use strict';
var _ = require('lodash');

/**
 * extend helper function taken from Backbone.js
 *
 * Helper function to correctly set up the prototype chain, for subclasses.
 * Similar to `goog.inherits`, but uses a hash of prototype properties and
 * class properties to be extended.
 */
module.exports = function(prototype_properties, static_properties) {
	var parent = this;
	var child;
	/**
	 * The constructor function for the new subclass is either defined by you
	 * (the "constructor" property in your `extend` definition), or defaulted
	 * by us to simply call the parent's constructor.
	 */
	if(prototype_properties && _.has(prototype_properties, 'constructor')) {
		child = prototype_properties.constructor;
	}
	else {
		child = function() {
			return parent.apply(this, arguments);
		};
	}
	/**
	 * Add static properties to the constructor function, if supplied.
	 */
	_.extend(child, parent, static_properties);
	/**
	 * Set the prototype chain to inherit from `parent`, without calling
	 * `parent`'s constructor function.
	 */
	var Surrogate = function() {
		this.constructor = child;
	};

	Surrogate.prototype = parent.prototype;
	child.prototype = new Surrogate;
	/**
	 * Add prototype properties (instance properties) to the subclass,
	 * if supplied.
	 */
	if(prototype_properties)
		_.extend(child.prototype, prototype_properties);
	/**
	 * Set a convenience property in case the parent's prototype is needed
	 * later.
	 */
	child.__super__ = parent.prototype;
	return child;
};