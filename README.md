# EscapeJS Recursive / under development

## About
The reason to development this it module, is to help protection of the Injection Script Attack([XSS](https://www.owasp.org/index.php/Top_10_2010-A2-Cross-Site_Scripting_(XSS))) When trying injection your application, this module go protect of form recursive.

### Docs
1. [English](https://github.com/renanbastos93/escapejs#English)
2. [Português](https://github.com/renanbastos93/escapejs#Portuguese)

## Install
```bash
$ npm i -S https://github.com/renanbastos93/escapejs.git
```

## Getting Start
```js
//IMPORT
const escapejs = require('escapejs');

//USING
escapejs('<script>'); // %3Cscript%3E
```

## API

Method | Param Type | Returns | Raises
-------|------------|---------|-------
str_escape | string or unicode | Return the received string or unicode and modified with escaped strings case found | Raise ValueError case param isn't from string or unicode type
list_escape | list | Return the received list modified with escaped strings case found | Raise ValueError case param isn't from list type
dict_escape | dict or json | Return the received dict modified with escaped strings case found | Raise ValueError case param isn't from dic type
ecape | unicode, string, list, dict, json | Return the received data escaped | Raise ValueError case param isn't from string, unicode, json, dict or list type

