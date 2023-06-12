/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  s = s.toLowerCase();

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // check non-alphanumeric character
    if (
      s[left].charCodeAt(0) < 'a'.charCodeAt(0) ||
      s[left].charCodeAt(0) > 'z'.charCodeAt(0)
    )
      left++;
    else if (
      s[right].charCodeAt(0) < 'a'.charCodeAt(0) ||
      s[right].charCodeAt(0) > 'z'.charCodeAt(0)
    )
      right--;
    else {
      if (s[left] !== s[right]) return false;

      left++;
      right--;
    }
    // check character at each point
  }

  return true;
};

module.exports = { isPalindrome };
