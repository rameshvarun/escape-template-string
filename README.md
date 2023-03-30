# escape-template-string

[![Node.js CI](https://github.com/rameshvarun/escape-template-string/actions/workflows/node.js.yml/badge.svg)](https://github.com/rameshvarun/escape-template-string/actions/workflows/node.js.yml)

Escape a string so that it can be eval-ed in as a template literal. This is useful for projects such as [ProtoWorld](https://github.com/rameshvarun/protoworld/blob/ac53623145411c01002eb8e601add71c06c408c1/src/modules/interface.js#L39) that generate human-readable JavaScript code.

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
