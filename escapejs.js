'use strict';

const validTypes = require('./lib/validTypes');

class EscapeJS extends validTypes{
	constructor(){
		super()
		this.str();
		this.json();
		this.array();
		this.escape();
	}
	str(param){
		if(!param) {
			param = '';
		}

		if(!this.isString(param)) {
			throw new Error('[ERROR] param must be from string type');
		}

		param = escape(param);

		return param;
	}
	json(param){
		if(!param) {
			param = {};
		}

		if(!this.isObject(param)) {
			throw new Error('[ERROR] param must be from object type');
		}

		var tmp;

		for(var attr in param) {
			tmp = param[attr];
			var isArr = false;
			
			if (param.hasOwnProperty(attr)) {
				isArr = this.isArray(tmp);

				if(this.isString(tmp)) {
					param[attr] = this.str(tmp);
				}

				if(isArr) {
					this.array(tmp);
				}

				if(!isArr && this.isObject(tmp)) {
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

		if(!this.isArray(param)) {
			throw new Error('[ERROR] param must be from array type');
		}

		var countList = param.length;
		var tmp;
		var isArr = false;

		for(var i = 0; i < countList; i++) {
			tmp = param[i];
			isArr = this.isArray(tmp);

			if(this.isString(tmp)) {
				param[i] = this.str(tmp);
			}

			if(isArr) {
				this.array(tmp);
			}

			if(tmp && !isArr && this.isObject(tmp)) {
				this.json(tmp);
			}

		}	

		return param;
	}
	escape(param = ''){
		if(!param){
			throw new Error('[ERROR] param has no type');
		}
		var tmp = param;
		if(this.isString(tmp)){
			param = this.str(tmp)
		}
		if(this.isObject(tmp)){
			param = this.json(tmp);
		}
		if(this.isArray(tmp)){
			param = this.array(tmp);
		}
		return param
	}
}

module.exports = EscapeJS;