# EscapeJS

<div style="text-align: center">
    <img src ="./doc/escape-logo.png" />
</div>


## About

EscapeJS is a easy way to escape string.
We have a native module to escape in NodeJSm, but, it is just to strings values.

EscapeJS will help you to escape string values found in arrays and object structs in a 
recursive format.


## Install

```bash
$ npm i -S https://github.com/renanbastos93/escapejs.git
```


## Easy to use
```js
const escapejs = require('escapejs');

let strData = escapejs('<script>'); // %3Cscript%3E
let objData = escapejs({
    'a': '<script>',
    'b': [
            'a',
            '<script>',
            {
                'a': 1,
                'b': '<script>'
            }
        ]
    }); // { a: '%3Cscript%3E', b: [ 'a', '%3Cscript%3E', { a: 1, b: '%3Cscript%3E' } ] }
let arrData = escapejs(
	[
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
	]); // ['%3Cscript%3E', ['asdasd', '%3Cscript%3E', ['%3Casdasd%3E', [Object]]] ]
```
