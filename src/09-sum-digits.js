/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(x) {
  const arr = x.toString().split('').map(Number);
  const result = arr.reduce((sum, cur) => sum + cur);
  return (arr.length === 1) ? result : getSumOfDigits(result);
}

module.exports = getSumOfDigits;
