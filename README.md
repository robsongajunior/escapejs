# EscapeJS Recursive / under development

## About
The reason to development this it module, is to help protection of the Injection Script Attack([XSS](https://www.owasp.org/index.php/Top_10_2010-A2-Cross-Site_Scripting_(XSS))) When trying injection your application, this module go protect of form recursive.

### Docs
1. [English](https://github.com/renanbastos93/escapejs/blob/master/README.md)
2. [Português](https://github.com/renanbastos93/escapejs/blob/master/README-ptbr.md)

## Install
```bash
$ npm i -S https://github.com/renanbastos93/escapejs.git
```

## Getting Start
```js
//IMPORT ES5
const escapejs = require('escapejs');

//IMPORT ES6 - Using Destructuring Assignment
const {escapejs, str} = require('escapejs');

//USING ES5
escapejs('<script>'); // %3Cscript%3E'

//USING ES6
escapejs('<script>'); // %3Cscript%3E
str('<script>'); // %3Cscript%3E
```

## API

Method | Param Type | Returns | Raises
-------|------------|---------|-------
str | string or unicode | Return the received string or unicode and modified with escaped strings case found | Raise ValueError case param isn't from string or unicode type
array | list | Return the received list modified with escaped strings case found | Raise ValueError case param isn't from list type
json | dict or json | Return the received dict modified with escaped strings case found | Raise ValueError case param isn't from dic type
escapejs | unicode, string, list, dict, json | Return the received data escaped | Raise ValueError case param isn't from string, unicode, json, dict or list type

