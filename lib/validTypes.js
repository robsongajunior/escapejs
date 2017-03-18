function isString(str){
	return (typeof str === 'string') ? true : false;
};
function isObject(obj){
	return (typeof obj === 'object') ? true : false;
};
function isNumber(num){
	return (typeof num === 'number') ? true : false;
};
function isArray(arr){
	return (Array.isArray(arr) === true) ? true : false;
};
function isFunction(fun){
	return (typeof fun === 'function') ? true : false;
};
module.exports = {
	isString,
	isObject,
	isNumber,
	isArray,
	isFunction
}