"use strict";
const valid = require('./validTypes');
const version = process.versions.node;

function EscapeJS(){
	
};

EscapeJS.prototype = EscapeJS;

EscapeJS.prototype.str = (str) => {
	try{
		if(valid.isString(str) === 'string')
		{
			return escape(str);

		}else{
			return valid.isString(str);
		}
	}catch(ex){
		return new Error('Escape String', ex);
	}
};

module.exports = EscapeJS;


 // Testing to next in mocha
	var a = new EscapeJS().str('Renan "\' %</script> <script> sei la')
	console.log(a)
