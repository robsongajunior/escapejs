# EscapeJS

<p align="center">
    <img src ="./doc/escape-logo.png" width="600px" />
</p>


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
var escapejs = require('escapejs');


/////////////////
// STRING DATA //
/////////////////

var strData = escapejs('<script>');
console.log(strData); // %3Cscript%3E


//////////////////////
// JSON/OBJECT DATA //
/////////////////////
var jsonData = {
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
console.log(jsonData);
/*
{
	'a': '%3Cscript%3E',
	'b': [
		'a',
		'%3Cscript%3E',
		{
			'a': 1,
			'b': '%3Cscript%3E'
		}
	]
}
*/


////////////////
// ARRAY DATA //
///////////////
var arrayData = [
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
console.log(arrayData);
/*
[
	'%3Cscript%3E',
	[
		'asdasd',
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
]
*/
```
