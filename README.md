# UrlifyJS

A small module that will help you with URL validation and turning strings into URLs.

# Example usage:

```js
var urlify = require('urlifyjs');

urlify.config({protos: true, accept: '._-#', whiteSpace: '-'});

console.log('Hello, Darling!'.toUrl()); // logs 'hello-darling' with these settings.
```


