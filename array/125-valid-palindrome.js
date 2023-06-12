/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // check non-alphanumeric character
    const regex = /[a-z0-9]/i;
    if (!regex.test(s[left])) {
      left++;
    } else if (!regex.test(s[right])) {
      right--;
    } else {
      if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
      left++;
      right--;
    }
  }

  return true;
};

module.exports = { isPalindrome };
