'use strict';

const type = require('./lib/validTypes');
const isString = type.isString;
const isObject = type.isObject;
const isArray = type.isArray;
    
var API = {};

API.str = function(param) {
    if(!param) {
        param = '';
    }

    if(!isString(param)) {
        throw new Error('[ERROR] param must be from string type');
    }

    param = escape(param);

    return param;
};

API.json = function(param) {
    if(!param) {
        param = {};
    }

    if(!isObject(param)) {
        throw new Error('[ERROR] param must be from object type');
    }
	
	var tmp;

	for(let attr in param) {
		tmp = param[attr];
		var isArr = false;

		// STRING
	 	if (param.hasOwnProperty(attr)) {
			isArr = isArray(tmp);
			
			if(isString(tmp)) {
				param[attr] = API.str(tmp);
			}

			if(isArr) {
				API.array(tmp);
			}

			if(!isArr && isObject(tmp)) {
				API.json(tmp);
			}
	  	}
	}

    return param;
};

API.array = function(param) {
	if(!param) {
		param = [];	
	}
	
	if(!isArray(param)) {
        throw new Error('[ERROR] param must be from array type');
    }

	var countList = param.length;
	var tmp;
	var isArr = false;

	for(let i = 0; i < countList; i++) {
		tmp = param[i];
		isArr = isArray(tmp);

		if(isString(tmp)) {
			param[i] = API.str(tmp);
		}

		if(isArr) {
			API.array(tmp);
		}

		if(tmp && !isArr && isObject(tmp)) {
			API.json(tmp);
		}

	}	

	return param;
};

module.exports = API;