'use strict';


var assert = require('assert');
var escapejs = require('../escapejs');


describe('testing string input', function(){
	it('send string must return string', function(){
		var input = escapejs('<string>');
		var output = '%3Cstring%3E';

		assert.equal(input, output, 'Testing String');
	});
});


describe('Testing of the recursive escape', function(){
	it('send json must return json', function(){
		var input = {
			'a': '<script>',
			'b': ['a', '<script>', {'a': 1, 'b': '<script>'}]
		};
		var output = { a: '%3Cscript%3E', b: [ 'a', '%3Cscript%3E', { a: 1, b: '%3Cscript%3E' } ] };
		assert.deepEqual(escapejs(input), output, 'Testing JSON');
	});

	it('send array must return array', function(){
		var input = [
			'<script>',
			['asdasd', '<script>',
				['<asdasd>',
					['a', '<script>', {'a': '12', 'b': '<script>'}]
				]
			]
		];
		var output = [ '%3Cscript%3E', [ 'asdasd', '%3Cscript%3E', [ '%3Casdasd%3E', [Object] ] ] ];
		assert.notStrictEqual(escapejs(input), output, 'Testing Array');
	});
});
