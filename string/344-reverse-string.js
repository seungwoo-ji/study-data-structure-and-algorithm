/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = (s) => {
  // built-in method to reverse the array in-place
  // return s.reverse();

  let start = 0,
    end = s.length - 1;

  while (start < end) {
    // swap the values
    [s[start], s[end]] = [s[end], s[start]];

    start++;
    end--;
  }

  return s;
};

// time complexity O(n)
// space complexity O(1)

module.exports = reverseString;
