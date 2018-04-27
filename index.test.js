const escape = require('./index.js');

test('Basic Test', () => {
  var code = `(function() {
    var x = 'test';
    return \`\${x}\\n\${x}\`;
  })`;

  expect(eval(escape(code))).toBe(code);
  expect(eval(eval(escape(escape(code))))).toBe(code);
  expect(eval(code)()).toBe('test\ntest');
});
