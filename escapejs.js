'use strict';

const type = require('./lib/typeValidation.js');
const isString = type.isString;
const isObject = type.isObject;
const isArray = type.isArray; 

var EscapeJS = {};

EscapeJS.str = function(param) {
    if(!param) {
        param = '';
    }

    if(!isString(param)) {
        throw new Error('[ERROR] param must be from string type');
    }

    return escape(param);
};

EscapeJS.json = function(param) {
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

		// STRING
	 	if (param.hasOwnProperty(attr)) {
			isArr = isArray(tmp);
			
			if(isString(tmp)) {
				param[attr] = EscapeJS.str(tmp);
			}

			if(isArr) {
				EscapeJS.array(tmp);
			}

			if(!isArr && isObject(tmp)) {
				EscapeJS.json(tmp);
			}
	  	}
	}

    return param;
};

EscapeJS.array = function(param) {
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
			param[i] = EscapeJS.str(tmp);
		}

		if(tmp && isArr) {
			EscapeJS.array(tmp);
		}

		if(tmp && !isArr && isObject(tmp)) {
			EscapeJS.json(tmp);
		}
	}	

	return param;
};

EscapeJS.escape = function(param){
	if(!param){
		throw new Error('[ERROR] param has no type');
	}
	var tmp = param;
	if(isString(tmp)){
		param = EscapeJS.str(tmp)
	}
	if(isArray(tmp)){
		EscapeJS.array(tmp)
	}
	if(isObject(tmp)){
		EscapeJS.json(tmp);
	}
	return param;
};

module.exports = EscapeJS;
