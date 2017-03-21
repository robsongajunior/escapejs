'use strict';

const validTypes = require('./lib/validTypes');
const type = new validTypes();
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
					param[attr] = this.str(tmp);
				}

				if(isArr) {
					this.array(tmp);
				}

				if(!isArr && isObject(tmp)) {
					this.json(tmp);
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
				param[i] = this.str(tmp);
			}

			if(isArr) {
				this.array(tmp);
			}

			if(tmp && !isArr && isObject(tmp)) {
				this.json(tmp);
			}

		}	

		return param;
	}
}

module.exports = EscapeJS;

var a = new EscapeJS();
var b = a.array(['</script>','</script>',{a: '</script>', b: '</script>'}]);
var c = a.json({a: '</script>', b: '</script>'});
var d = a.str('</strin?>')
console.log(b);
console.log(c);
console.log(d);