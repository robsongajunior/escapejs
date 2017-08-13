'use strict';


var assert = require('assert');
var escapejs = require('../escapejs');


// STRING INPUT TYPE
describe('escaping string input', function() {
    it('Convert ¨ into %A8', function() {
        assert.equal(escapejs('¨'), '%A8', 'Convert ¨ into %A8');
    });

    it('Convert , into %2C', function() {
	    assert.equal(escapejs(','), '%2C', 'Convert , into %2C');
    });

    it('Convert ! into %21', function() {
	    assert.equal(escapejs('!'), '%21', 'Convert ! into %21');
    });

    it('Convert " into %22', function() {
	    assert.equal(escapejs('"'), '%22', 'Convert " into %22');
    });

    it('Convert # into %23', function() {
	    assert.equal(escapejs('#'), '%23', 'Convert # into %23');
    });

    it('Convert $ into %24', function() {
	    assert.equal(escapejs('$'), '%24', 'Convert $ into %24');
    });

    it('Convert & into %26', function() {
        assert.equal(escapejs('&'), '%26', 'Convert & into %26');
    });

    it('Convert \' into %27', function() {
	    assert.equal(escapejs('\''), '%27', 'Convert \' into %27');
    });

    it('Convert ( into %28', function() {
	    assert.equal(escapejs('('), '%28', 'Convert ( into %28');
    });

    it('Convert ) into %29', function() {
	    assert.equal(escapejs(')'), '%29', 'Convert ) into %29');
    });

    it('Convert : into %3A', function() {
        assert.equal(escapejs(':'), '%3A', 'Convert : into %3A');
    });

    it('Convert ; into %3B', function() {
        assert.equal(escapejs(';'), '%3B', 'Convert ; into %3B');
    });

    it('Convert < into %3C', function() {
        assert.equal(escapejs('<'), '%3C', 'Convert < into %3C');
    });

    it('Convert = into %3D', function() {
	    assert.equal(escapejs('='), '%3D', 'Convert = into %3D');
    });

    it('Convert > into %3E', function() {
        assert.equal(escapejs('>'), '%3E', 'Convert > into %3E');
    });

    it('Convert ? into %3F', function() {
        assert.equal(escapejs('?'), '%3F', 'Convert ? into %3F');
    });

    it('Convert [ into %5B', function() {
        assert.equal(escapejs('['), '%5B', 'Convert [ into %5B');
    });

    it('Convert \\ into %5C', function() {
        assert.equal(escapejs('\\'), '%5C', 'Convert \\ into %5C');
    });

    it('Convert ] into %5D', function() {
        assert.equal(escapejs(']'), '%5D', 'Convert ] into %5D');
    });

    it('Convert ^ into %5E', function() {
        assert.equal(escapejs('^'), '%5E', 'Convert ^ into %5E');
    });

    it('Convert { into %7B', function() {
        assert.equal(escapejs('{'), '%7B', 'Convert { into %7B');
    });

    it('Convert | into %7C', function() {
        assert.equal(escapejs('|'), '%7C', 'Convert | into %7C');
    });

    it('Convert } into %7D', function() {
        assert.equal(escapejs('}'), '%7D', 'Convert } into %7D');
    });

    it('Convert ~ into %7E', function() {
        assert.equal(escapejs('~'), '%7E', 'Convert ~ into %7E');
    });
});


// JSON OR OBJECT INPUT TYPE
describe('escaping json/object', function() {
	it('send json must return json', function(){
		var input = {
			'a': '<script>',
			'b': [
                'a',
                '<script>',
                {
                    'a': 1,
                    'b': '<script>'
                }
            ]
		};
		var output = {
            'a': '%3Cscript%3E',
            'b': [
                'a',
                '%3Cscript%3E',
                {
                    'a': 1,
                    'b': '%3Cscript%3E'
                }
            ]
        };

        assert.deepEqual(escapejs(input), output, 'Testing JSON');
	});
});


// ARRAY INPUT TYPE
describe('escaping array', function() {
	it('send array must return array', function(){
		var input = [
			'<script>',
			[
                'asdasd',
                '<script>',
				[
                    '<asdasd>',
					[
                        'a',
                        '<script>',
                        {
                            'a': '12',
                            'b': '<script>'
                        }
                    ]
				]
			]
		];
		var output =  [
			'%3Cscript%3E',
			[
            '   asdasd',
                '%3Cscript%3E',
				[
                    '%3Cscript%3E',
					[
                        'a',
                        '%3Cscript%3E',
                        {
                            'a': '12',
                            'b': '%3Cscript%3E'
                        }
                    ]
				]
			]
		];

        assert.notStrictEqual(escapejs(input), output, 'Testing Array');
	});
});
