function isString(str){
	return (typeof str === 'string') ? true : typeof str;
};
function isObject(obj){
	return (typeof obj === 'object') ? true : typeof obj;
};
function isNumber(num){
	return (typeof num === 'number') ? true : typeof num;
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