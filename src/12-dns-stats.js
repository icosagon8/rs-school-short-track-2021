/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const splitDomains = domains.map((item) => item.split('.'));
  const arr = [];

  for (let i = splitDomains.length - 1; i >= 0; i--) {
    let str = '';

    for (let j = splitDomains[i].length - 1; j >= 0; j--) {
      arr.push(`${str}.${splitDomains[i][j]}`);
      str += `.${splitDomains[i][j]}`;
    }
  }

  const stats = {};

  arr.forEach((item) => {
    stats[item] = (stats[item] === undefined) ? 1 : ++stats[item];
  });

  return stats;
}

module.exports = getDNSStats;
