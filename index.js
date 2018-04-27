module.exports = function (str) {
  return "`" + str.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$') + "`";
}
