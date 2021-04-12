/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */
function removeKFromList(l, k) {
  const clone = JSON.parse(JSON.stringify(l));
  let temp = clone;

  while (temp) {
    if (temp.value === k) {
      temp.value = temp.next.value;
      temp.next = temp.next.next;
    } else {
      temp = temp.next;
    }
  }

  return clone;
}

module.exports = removeKFromList;
