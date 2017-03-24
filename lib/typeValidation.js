'use strict';


var VALIDATE = {};


// METHODS

VALIDATE.isString = function(param) {
	return (typeof param === 'string') ? true : false;
};


VALIDATE.isObject = function(param) {
	return (!VALIDATE.isArray(param) && typeof param === 'object') ? true : false;
};


VALIDATE.isArray = function(param) {
	return (Array.isArray(param) === true) ? true : false;
};


// EXPORTING

module.exports = VALIDATE;
