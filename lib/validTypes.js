function isString(str){
	return (typeof str === 'string') ? 'string' : typeof str;
};
function isObject(obj){
	return (typeof obj === 'object') ? 'object' : typeof obj;
};
function isNumber(num){
	return (typeof num === 'number') ? 'number' : typeof num;
};
function isArray(arr){
	return (Array.isArray(arr) === true) ? true : typeof arr;
};
function isFunction(fun){
	return (typeof fun === 'function') ? true : typeof fun;
};
module.exports = {
	isString,
	isObject,
	isNumber,
	isArray,
	isFunction
}