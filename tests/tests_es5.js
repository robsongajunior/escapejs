'use strict';

var assert = require('assert');
const escapejs = require('../escapejs');

describe('Testing of the recursive escape', function(){

	it('send string must return string', function(){
		var str = "<string>";
		var resStr = "%3Cstring%3E";
		assert.equal(resStr, escapejs(str), 'Testing String');
	});

	it('send json must return json', function(){
		var obj = {
			'a': '<script>',
			'b': ['a', '<script>', {'a': 1, 'b': '<script>'}]
		};
		var json = { a: '%3Cscript%3E', b: [ 'a', '%3Cscript%3E', { a: 1, b: '%3Cscript%3E' } ] };
		assert.deepEqual(json, escapejs(obj), 'Testing JSON');
	});
    
	it('send array must return array', function(){
		var arr = [
			'<script>', 
			['asdasd', '<script>', 
				['<asdasd>', 
					['a', '<script>', {'a': '12', 'b': '<script>'}]
				]
			]
		];
		var array = [ '%3Cscript%3E', [ 'asdasd', '%3Cscript%3E', [ '%3Casdasd%3E', [Object] ] ] ];
		assert.notStrictEqual(array, escapejs(arr), 'Testing Array');
	});
});
