'use strict';

var assert = require('assert');
const API = require('../escapejs');

describe('Testing of the recursive escape', function(){

	it('send <string> must return %3Cscript%3E', function(){
		assert.equal(API.str('<string>'), API.str('<string>'), 'Testing String');
	});

	it('send json must return json', function(){
		let obj = {
			'a': '<script>',
			'b': ['a', '<script>', {'a': 1, 'b': '<script>'}]
		};
		let json = API.json(obj);
		assert.equal(json, API.json(obj), 'Testing JSON');
	});

	it('send array must return array', function(){
		let arr = 
		[
			'<script>', 
			['asdasd', '<script>', 
				['<asdasd>', 
					['a', '<script>', {'a': '12', 'b': '<script>'}]
				]
			]
		];
		let array = API.array(arr);
		assert.equal(array, API.json(arr), 'Testing Array');
	});
	
});