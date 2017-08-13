# EscapeJS

<div style="text-align: center">
    <img src ="./doc/escape-logo.png" />
</div>


## About

EscapeJS is a easy way to escape strings values; Today, we have a native module to escape in NodeJS,
but, it is just to strings values. EscapeJS will help you to find and escape string values found in arrays and object/json structs.


## Install

```bash
$ npm i -S https://github.com/renanbastos93/escapejs.git
```


## Easy to use
```js
// IMPORT MODULE
const escapejs = require('escapejs');


// EASY TO USE

// string data
let strData = escapejs('<script>'); // %3Cscript%3E

// object data
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
    });

// array data
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
	]);
```
