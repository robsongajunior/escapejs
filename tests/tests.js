'use strict';

var assert = require('assert');
const API = require('../escapejs');


describe('Testing of the recursive escape', function(){

	it('send string must return string', function(){
		assert.equal(API.str('<string>'), API.str('<string>'), 'Testing String');
	});

	it('send json must return json', function(){
		var obj = {
			'a': '<script>',
			'b': ['a', '<script>', {'a': 1, 'b': '<script>'}]
		};
		var json = API.json(obj);
		assert.equal(json, API.json(obj), 'Testing JSON');
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
		var array = API.array(arr);
		assert.equal(array, API.array(arr), 'Testing Array');
	});
});
