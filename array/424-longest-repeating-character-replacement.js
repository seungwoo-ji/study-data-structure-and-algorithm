/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// time: O(N)
// space: O(1)
const characterReplacement = (s, k) => {
  let left = 0;
  let right = 0;
  let max = 0;
  const arr = new Array(26).fill(0);

  while (right < s.length) {
    arr[s[right].charCodeAt(0) - 'A'.charCodeAt(0)]++;

    // (window size) - (number of the most frequent character)
    while (right - left + 1 - Math.max(...arr) > k) {
      arr[s[left].charCodeAt(0) - 'A'.charCodeAt(0)]--;
      left++;
    }

    max = Math.max(max, right - left + 1);
    right++;
  }

  return max;
};

// using map
// time: O(N)
// space: O(1)
const characterReplacementTwo = (s, k) => {
  let left = 0;
  let right = 0;
  let max = 0;
  const map = new Map();

  while (right < s.length) {
    if (map.has(s[right])) {
      const val = map.get(s[right]);
      map.set(s[right], val + 1);
    } else {
      map.set(s[right], 1);
    }

    while (right - left + 1 - Math.max(...map.values()) > k) {
      const val = map.get(s[left]);
      map.set(s[left], val - 1);
      left++;
    }

    max = Math.max(max, right - left + 1);
    right++;
  }

  return max;
};

// optimized version
// time: O(N)
// space: O(1)
const characterReplacementThree = (s, k) => {
  let left = 0;
  let right = 0;
  let maxWindow = 0;
  let maxFreq = 0;
  const map = new Map();

  while (right < s.length) {
    if (map.has(s[right])) {
      const val = map.get(s[right]);
      map.set(s[right], val + 1);
    } else {
      map.set(s[right], 1);
    }

    // Instead of finding the maximum frequency for every iteration,
    // we can just keep track of the maximum frequency to find the maximum window
    // This is possible because the only way to get the maximum window range is by having
    // the maximum possible frequency of one character. Note that we are looking for a condition of
    // right - left + 1 (window) - maximum frequency > k to reduce the window size and to avoid this,
    // we need to find the largest possible number of maximum frequency.
    // Also, we need to be aware of the fact that the window size is not correct for every iteration.
    // We can ignore this because the size is always smaller than or equal to the current maximum window.
    maxFreq = Math.max(maxFreq, map.get(s[right]));

    if (right - left + 1 - maxFreq > k) {
      const val = map.get(s[left]);
      map.set(s[left], val - 1);
      left++;
    }

    maxWindow = Math.max(maxWindow, right - left + 1);
    right++;
  }

  return maxWindow;
};

module.exports = {
  characterReplacement,
  characterReplacementTwo,
  characterReplacementThree,
};
