'use strict';

var assert = require('assert');
const {escapejs, str, array, json} = require('../escapejs');

describe('Testing of the recursive escape', function(){

	it('send string must return string', function(){
		var string = "<string>";
		var resStr = "%3Cstring%3E";
		assert.equal(resStr, str(string), 'Testing String');
	});

	it('send json must return json', function(){
		var obj = {
			'a': '<script>',
			'b': ['a', '<script>', {'a': 1, 'b': '<script>'}]
		};
		var jsonp = { a: '%3Cscript%3E', b: [ 'a', '%3Cscript%3E', { a: 1, b: '%3Cscript%3E' } ] };
		assert.deepEqual(jsonp, json(obj), 'Testing JSON');
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
		var arrays = [ '%3Cscript%3E', [ 'asdasd', '%3Cscript%3E', [ '%3Casdasd%3E', [Object] ] ] ];
		assert.notStrictEqual(arrays, array(arr), 'Testing Array');
	});

	it('send any param and return param escape', function(){
		/*
		* String
		*/
		var string = "<string>";
		var resStr = "%3Cstring%3E";
		assert.equal(resStr, escapejs(string), 'Testing escapejs(string)');

		/*
		* Json
		*/
		var obj = {
			'a': '<script>',
			'b': ['a', '<script>', {'a': 1, 'b': '<script>'}]
		};
		var jsonp = { a: '%3Cscript%3E', b: [ 'a', '%3Cscript%3E', { a: 1, b: '%3Cscript%3E' } ] };
		assert.deepEqual(jsonp, json(obj), 'Testing escapejs(json)');

		/*
		* Array
		*/
		var arr = [
			'<script>', 
			['asdasd', '<script>', 
				['<asdasd>', 
					['a', '<script>', {'a': '12', 'b': '<script>'}]
				]
			]
		];
		var arrays = [ '%3Cscript%3E', [ 'asdasd', '%3Cscript%3E', [ '%3Casdasd%3E', [Object] ] ] ];
		assert.notStrictEqual(arrays, array(arr), 'Testing escapejs(Array)');
	});
});
