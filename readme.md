# regex-occurrence [![Build Status](https://travis-ci.org/SamVerschueren/regex-occurrence.svg?branch=master)](https://travis-ci.org/SamVerschueren/regex-occurrence)

> Get the number of occurrences of a RegExp in a string


## Install

```
$ npm install --save regex-occurrence
```


## Usage

```js
const regexOccurrence = require('regex-occurrence');

regexOccurrence('foo bar', /F/);
//=> 0

regexOccurrence('foo bar', /Foo/i);
//=> 1

regexOccurrence('foo bar\nfoo baz', [/foo/, /baz/]);
//=> 2

regexOccurrence('foo bar\nfoo baz', [/foo/g, /baz/]);
//=> 3
```


## API

### regexOccurrence(input, search)

#### input

Type: `string`

The string to search in.

#### search

Type: `RegExp`, `RegExp[]`

The regular expressions to search for.


## License

MIT © [Sam Verschueren](http://github.com/SamVerschueren)
