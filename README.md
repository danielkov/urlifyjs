# UrlifyJS

A small module that will help you with URL validation and turning strings into URLs.

## Example usage:

To use it with the default options:

```js
var urlify = require('urlifyjs');

var string = 'Welcome, Dr# Größ!';

// url === 'Welcome-Dr-Gross'
var url = urlify(string);
```
## Configurations

```js
var urlify = require('urlifyjs');

var string = 'Welcome, Dr# Größ!';

var config = {
   accept: '#',
   whiteSpace: '_',
   special: '#',
   sz: true,
   lowerCase: true
}

// url === 'welcome#_dr#_grosz#'
var url = urlify(string, config);
```

**accept:** tells Urlify which characters to accept. For instance if checking for a mailto: you want to accept '@'s. *Defaults to '-'*.

**whiteSpace:** this is what whitespaces will be replaced with. *Defaults to '-'*.

**special:** the value of this will be put in place of special characters. *Defaults to ''*.

**sz:** the German character 'Eszet' is replaced by 'ss' by default. Setting this true will make it so that those characters are instead replaced with 'sz'. *Defaults to false*.

**lowerCase:** the returned string will be converted to lower-case if this is set true. *Defaults to false*.
