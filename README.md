# escape-template-string [![Build Status](https://travis-ci.org/rameshvarun/escape-template-string.svg?branch=master)](https://travis-ci.org/rameshvarun/escape-template-string)

Escape a string so that it can be eval-ed in as a template literal.

```javascript
console.log(escape(`(function() {
  var x = 'test';
  return \`\${x}\\n\${x}\`;
})`));
// This prints the string below, which can be eval-ed in.
// `(function() {
//   var x = 'test';
//   return \`\${x}\\n\${x}\`;
// })`
```
