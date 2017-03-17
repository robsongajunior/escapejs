'use strict';

const type = require('./lib/validTypes');
    
var API = {};


API.str = function(param) {
    if(!param) {
        param = '';
    }

    if(type.isString(param) != true) {
        throw new Error('[ERROR] param must be from string type');
    }

    param = escape(param);

    return param;
};


API.json = function(param) {
    if(!param) {
        param = {};
    }

    if(type.isObject(param) != true) {
        throw new Error('[ERROR] param must be from object type');
    }
	
	var tmp;

	for(var attr in param) {
		tmp = param[attr];
		var isArr = false;

		// STRING
	 	if (param.hasOwnProperty(attr)) {
			isArr = Array.isArray(tmp);
			
			if(typeof tmp === 'string') {
				param[attr] = API.str(tmp);
			}

			if(isArr) {
				API.array(tmp);
			}

			if(!isArr && typeof param === 'object') {
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
	
	if(!Array.isArray(param)) {
        throw new Error('[ERROR] param must be from array type');
    }

	var countList = param.length;
	var tmp;
	var isArr = false;

	for(var i = 0; i < countList; i++) {
		tmp = param[i];
		isArr = Array.isArray(tmp);

		if(typeof tmp === 'string') {
			param[i] = API.str(tmp);
		}

		if(isArr) {
			API.array(tmp);
		}

		if(tmp && !isArr && typeof tmp === 'object') {
			API.json(tmp);
		}

	}	

	return param;
};

// TEST //

var arr = ['<script>', ['asdasd', '<script>', ['<asdasd>']]]
var obj = {
	'a': '<script>',
	'b': ['a', '<script>', {'a': 1, 'b': '<script>'}]
};

console.log('### API STR ###');
console.log(API.str('<script>'));

// console.log('### API ARRAY ###');
// console.log(API.array(arr));

// console.log('### API JSON ###');
// console.log(API.json(obj));
