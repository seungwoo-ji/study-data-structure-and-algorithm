/**
 * @param {string} s
 * @return {number}
 */
// brute force
// time: O(N^2)
// space: O(N)
const lengthOfLongestSubstring = (s) => {
  if (s.length === 0) return 0;

  let max = 1;

  for (let i = 0; i < s.length; ++i) {
    const hash = {};

    for (let j = i; j < s.length; ++j) {
      if (hash[s[j]]) break;

      hash[s[j]] = true;
      max = Math.max(max, j - i + 1);
    }
  }

  return max;
};

// sliding window
// time: O(N)
// space: O(N)
const lengthOfLongestSubstringTwo = (s) => {
  if (s.length === 0) return 0;

  const hash = {};
  let max = 1;
  let left = 0;

  for (let right = 0; right < s.length; ++right) {
    while (hash[s[right]]) {
      delete hash[s[left]];
      left++;
    }

    hash[s[right]] = true;
    max = Math.max(max, right - left + 1);
  }

  return max;
};

// optimized sliding window
// time: O(N)
// space: O(N)
const lengthOfLongestSubstringThree = (s) => {
  if (s.length === 0) return 0;

  const hash = new Map();
  let max = 0;
  let left = 0;

  for (let right = 0; right < s.length; ++right) {
    const char = s[right];

    // move the left pointer to the duplicating index directly
    if (hash.has(char) && hash.get(char) >= left) {
      left = hash.get(char) + 1;
    }

    // save current index in the map
    hash.set(char, right);
    max = Math.max(max, right - left + 1);
  }

  return max;
};

module.exports = {
  lengthOfLongestSubstring,
  lengthOfLongestSubstringTwo,
  lengthOfLongestSubstringThree,
};
