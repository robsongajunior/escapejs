var versions = process.versions.node;
var numVersion = parseInt(versions.replace('.', ''));

if(versions === '6.4.0' || numVersion >= 64){
	require('./tests_es6');
}else{
	require('./tests_es5');
}