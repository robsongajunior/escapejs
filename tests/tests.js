'use strict';

const API = require('../escapejs');

var arr = 
[
	'<script>', 
	['asdasd', '<script>', 
		['<asdasd>', 
			['a', '<script>', {'a': '12', 'b': '<script>'}]
		]
	]
];
var obj = {
	'a': '<script>',
	'b': ['a', '<script>', {'a': 1, 'b': '<script>'}]
};

console.log('### API STR ###');
console.log(API.str('<script>'));
console.log('-------------------');
console.log('### API ARRAY ###');
console.log(JSON.stringify(API.array(arr)));
console.log('-------------------');
console.log('### API JSON ###');
console.log(API.json(obj));