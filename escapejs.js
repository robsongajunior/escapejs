'use strict';

var escapeJS = {};

const type = require('./lib/typeValidation.js');
const isString = type.isString;
const isObject = type.isObject;
const isArray = type.isArray; 


escapeJS.str = function(param) {
	if(!param) {
		param = '';
	}

	if(!isString(param)) {
		throw new Error('[ERROR] param must be from string type');
	}

	return escape(param);
};


escapeJS.json = function(param) {
	if(!param) {
		param = {};
	}

	if(!isObject(param)) {
		throw new Error('[ERROR] param must be from object type');
	}
	
	var tmp;
	var isArr;

	for(var attr in param) {
		tmp = param[attr];
		isArr = false;

		if (param.hasOwnProperty(attr)) {
			isArr = isArray(tmp);
			
			if(isString(tmp)) {
				param[attr] = escapeJS.str(tmp);
			}

			if(isArr) {
				escapeJS.array(tmp);
			}

			if(!isArr && isObject(tmp)) {
				escapeJS.json(tmp);
			}
		}
	}

	return param;
};


escapeJS.array = function(param) {
	if(!param) {
		param = [];	
	}
	
	if(!isArray(param)) {
		throw new Error('[ERROR] param must be from array type');
	}

	var tmp;
	var countList = param.length;
	var isArr = false;

	for(var i = 0; i < countList; i++) {
		tmp = param[i];
		isArr = isArray(tmp);

		if(isString(tmp)) {
			param[i] = escapeJS.str(tmp);
		}

		if(tmp && isArr) {
			escapeJS.array(tmp);
		}

		if(tmp && !isArr && isObject(tmp)) {
		    escapeJS.json(tmp);
		}
	}	

	return param;
};


escapeJS.escape = function(param){
	if(!param){
		throw new Error('[ERROR] param has no type');
	}
	
    var tmp = param;
	
    if(isString(tmp)){
		param = escapeJS.str(tmp)
	}
	
    if(isArray(tmp)){
		escapeJS.array(tmp)
	}
	
    if(isObject(tmp)){
		escapeJS.json(tmp);
	}
	
    return param;
};

module.exports = escapeJS.escape;
