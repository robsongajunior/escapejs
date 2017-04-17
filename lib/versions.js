'use strict';

var versions = process.versions.node;
var numVersion = parseInt(versions.replace('.', ''));

function actualVersion(param){
	if(versions === '6.4.0' || numVersion >= 64){
		return param;
	}else{
		return param.escape;
	}
};

module.exports = actualVersion;