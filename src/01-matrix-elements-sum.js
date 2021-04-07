/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(array) {
  let sum = 0;

  array.forEach((item, i) => {
    item.forEach((value, j) => {
      if (i === 0) {
        sum += value;
      } else if (array[i - 1][j] !== 0) {
        sum += value;
      }
    });
  });

  return sum;
}

module.exports = getMatrixElementsSum;
