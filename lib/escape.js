"use strict";

const escapMap = require('./map');
const valid = require('./validTypes');
const version = process.versions.node;

function EscapeJS(){
	
};

EscapeJS.prototype = EscapeJS;

EscapeJS.prototype.string = (str) => {
	try{
		if(valid.isString(str) === 'string')
		{
			return str.replace('"', '7')

		}else{
			return valid.isString(str);
		}
	}catch(ex){
		return new Error('Escape String', ex);
	}
};

module.exports = EscapeJS;


/* Testing to next in mocha
	var a = new EscapeJS().string('Renan "\' %</script> <script> sei la')
	console.log(a)
*/