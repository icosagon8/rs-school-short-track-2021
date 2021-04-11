/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const regex = /@[a-z\d-]+\.[a-z]+$/gm;
  const emailDomain = email.match(regex)[0].slice(1);

  return emailDomain;
}

module.exports = getEmailDomain;
