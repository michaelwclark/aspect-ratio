'use strict'

module.exports = (numerator, denominator, separator) => {
  var divisor, gcd, temp
  separator = separator || ':'
  gcd = function (a, b) {
    return b === 0 ? a : gcd(b, a % b)
  }
  if (numerator === denominator) {
    return '1' + separator + '1'
  }
  if (numerator < denominator) {
    temp = numerator
    numerator = denominator
    denominator = temp
  }
  divisor = gcd(numerator, denominator)
  if (typeof temp === 'undefined') {
    return numerator / divisor + separator + denominator / divisor
  } else {
    return denominator / divisor + separator + numerator / divisor
  }
}
