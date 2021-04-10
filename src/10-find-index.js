/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let lowIndex = 0;
  let highIndex = array.length - 1;

  while (lowIndex <= highIndex) {
    const averageIndex = Math.floor((lowIndex + highIndex) / 2);
    const currentValue = array[averageIndex];

    if (currentValue === value) {
      return averageIndex;
    } if (currentValue > value) {
      highIndex = averageIndex - 1;
    } else {
      lowIndex = averageIndex + 1;
    }
  }

  return 'There is no such value in the array';
}

module.exports = findIndex;
