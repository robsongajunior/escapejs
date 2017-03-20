'use strict';

const type = require('./lib/validTypes');
const isString = type.isString;
const isObject = type.isObject;
const isArray = type.isArray;

class EscapeJS {
	constructor(){
		this.str();
		this.json();
		this.array();
	}
	str(param){
		if(!param) {
			param = '';
		}

		if(!isString(param)) {
			throw new Error('[ERROR] param must be from string type');
		}

		param = escape(param);

		return param;
	}
	json(param){
		if(!param) {
			param = {};
		}

		if(!isObject(param)) {
			throw new Error('[ERROR] param must be from object type');
		}

		var tmp;

		for(var attr in param) {
			tmp = param[attr];
			var isArr = false;
			
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
	}
	array(param){
		if(!param) {
			param = [];	
		}

		if(!isArray(param)) {
			throw new Error('[ERROR] param must be from array type');
		}

		var countList = param.length;
		var tmp;
		var isArr = false;

		for(var i = 0; i < countList; i++) {
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
	}
}

module.exports = EscapeJS;