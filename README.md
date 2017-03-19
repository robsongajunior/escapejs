# escapejs / under development

## About
	The reason to development this it module, is to help protection of the Injection Script Attack([XSS](https://www.owasp.org/index.php/Top_10_2010-A2-Cross-Site_Scripting_(XSS)))_ When trying injection your application, this module go protect of form recursive.

## Getting Start
```js
const escapejs = require('escapejs');

//Return %3Cscript/%3E
escapejs.str('<script/>');

//Return { 'a': '%3Cscript/%3E', 'b': '%3Cscript/%3E'}
escapejs.json({ 'a': '<script/>', 'b': '<script/>'}); 

//Return ['%3Cscript/%3E','%3Cscript/%3E', [{ 'a': '%3Cscript/%3E', 'b': '%3Cscript/%3E'}]]
escapejs.array(['<script/>','<script/>', [{ 'a': '<script/>', 'b': '<script/>'}]]);
```
