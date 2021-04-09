/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const clone = arr.slice();
  const sortedArr = arr.filter((item) => item !== -1).sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < clone.length; i++) {
    if (clone[i] !== -1) {
      clone[i] = sortedArr[count];
      count++;
    }
  }

  return clone;
}

module.exports = sortByHeight;
