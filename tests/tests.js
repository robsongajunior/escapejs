'use strict';


var assert = require('assert');
var escapejs = require('../escapejs');


// STRING INPUT TYPE
describe('escaping string input', function() {
    it('Convert < into %3C', function() {
        assert.equal(escapejs('<'), '%3C', 'Convert < into %3C');
    });

    it('Convert > into %3E', function() {
        assert.equal(escapejs('>'), '%3E', 'Convert > into %3E');
    });

    it('Convert & into %26', function() {
        assert.equal(escapejs('&'), '%26', 'Convert & into %26');
    });

    it('Convert " into %22', function() {
	    assert.equal(escapejs('"'), '%22', 'Convert " into %22');
    });

    it('Convert \' into %27', function() {
	    assert.equal(escapejs('\''), '%27', 'Convert \' into %27');
    });
});


// JSON OR OBJECT INPUT TYPE
describe('escaping json/object', function() {
	it('send json must return json', function(){
		var input = {
			'a': '<script>',
			'b': ['a', '<script>', {'a': 1, 'b': '<script>'}]
		};
		var output = { a: '%3Cscript%3E', b: [ 'a', '%3Cscript%3E', { a: 1, b: '%3Cscript%3E' } ] };

        assert.deepEqual(escapejs(input), output, 'Testing JSON');
	});
});


// ARRAY INPUT TYPE
describe('escaping array', function() {
	it('send array must return array', function(){
		var input = [
			'<script>',
			['asdasd', '<script>',
				['<asdasd>',
					['a', '<script>', {'a': '12', 'b': '<script>'}]
				]
			]
		];
		var output =  [
			'%3Cscript%3E',
			['asdasd', '%3Cscript%3E',
				['%3Cscript%3E',
					['a', '%3Cscript%3E', {'a': '12', 'b': '%3Cscript%3E'}]
				]
			]
		];

        assert.notStrictEqual(escapejs(input), output, 'Testing Array');
	});
});
