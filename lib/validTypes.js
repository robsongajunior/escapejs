class validTypes {
	constructor(){
		this.isString();
		this.isObject();
		this.isNumber();
		this.isArray();
		this.isFunction();
	}
	isString(param){ 	return (typeof param === 'string') ? true : false; 		};
	isObject(param){ 	return (typeof param === 'object') ? true : false; 		};
	isNumber(param){ 	return (typeof param === 'number') ? true : false; 		};
	isArray(param){ 	return (Array.isArray(param) === true) ? true : false; 	};
	isFunction(param){ 	return (typeof param === 'function') ? true : false;		};
};

module.exports = validTypes;