# EscapeJS Recursivo / em desenvolvimento

## About
A ração do desenvolvimento deste modulo, é para ajudar na proteção contra Injeção de Script Ataque o famoso ([XSS](https://www.owasp.org/index.php/Top_10_2010-A2-Cross-Site_Scripting_(XSS))) quando tentarem injetarem sua aplicação, este modulo vai proteger de forma recursiva.

### Docs
1. [English](https://github.com/renanbastos93/escapejs#README)
2. [Português](https://github.com/renanbastos93/escapejs#README-ptbr)

## Installar
```bash
$ npm i -S https://github.com/renanbastos93/escapejs.git
```

## Começando a usar
```js
//IMPORTAR COM ES5
const escapejs = require('escapejs');

//IMPORTAR COM ES6 - Using Destructuring Assignment
const {escapejs, str} = require('escapejs');

//USANDO COM ES5
escapejs('<script>'); // %3Cscript%3E'

//USANDO COM ES6
escapejs('<script>'); // %3Cscript%3E
str('<script>'); // %3Cscript%3E
```

## API

Metódos | Tipos de Parametros | Retornos | Levantar
-------|------------|---------|-------
str | string ou unicode | Retorna a seqüência de caracteres recebido ou unicode e modificado com caso de seqüências de escape encontrado | Levantar ValueError case param isn't from string or unicode type
array | lista | Retorna a lista recebida modificada com escape de seqüências de caracteres caso encontrado | Levantar ValorError caso param não é de tipo lista
json | dicionário/ JSON | Retorna o dict recebido modificado com caso de seqüências de escape encontradas | Levantar ValorError caso param não é do tipo dicionáro/JSON
escapejs | unicode, string, lista, dicionário, json | Retornar os dados recebidos escapados | Levantar valorError caso param não é de string, unicode, json, dict ou tipo de lista

