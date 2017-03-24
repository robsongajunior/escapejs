'use strict';

var assert = require('assert');
const API = require('../escapejs');


describe('Testing of the recursive escape', function(){

	it('send <string> must return <string>', function(){
		let str = API.str('<string>');
		assert.equal(str, API.str('<string>'));
	});

	it('send json must return json', function(){
		let obj = {
			'a': '<script>',
			'b': ['a', '<script>', {'a': 1, 'b': '<script>'}]
		};
		let json = API.json(obj);
		
        assert.equal(json, API.json(obj));
	});
    
	it('send array must return array', function(){
		let arr = [
			'<script>', 
			['asdasd', '<script>', 
				['<asdasd>', 
					['a', '<script>', {'a': '12', 'b': '<script>'}]
				]
			]
		];
		let array = API.array(arr);
		assert.equal(array, API.array(arr));
	});
});
