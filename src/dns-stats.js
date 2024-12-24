const { NotImplementedError } = require('../extensions/index.js');

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
  let result = {};

  for (let domain of domains) {
    let parts = domain.split('.').reverse();

    let dnsSuffix = '';

    for (let part of parts) {
      dnsSuffix += '.' + part;

      if (result[dnsSuffix]) {
        result[dnsSuffix]++;
      } else {
        result[dnsSuffix] = 1;
      }
    }
  }

  return result;
}

module.exports = {
  getDNSStats
};
