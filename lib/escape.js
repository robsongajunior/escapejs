const dicionary = {
	andCommercial : '&amp;',
	less : '&lt;',
	more : '&gt;',
	quontationMarks :{ 
		double: '&quot;',
		only : '&#x27;'
	},
	bar : '&#x2F;',
	space: '%'
};
const version = process.versions.node;

function EscapeJS(){
	this.dicionary = dicionary;
};

EscapeJS.prototype = EscapeJS;

EscapeJS.prototype.escape = (params) => {
	return params;
};

module.exports = EscapeJS;
