/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// using hash table
// time: O(N)
// space: O(N)
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const map = new Map();

  for (let i = 0; i < s.length; ++i) {
    if (map.has(s[i])) {
      const val = map.get(s[i]);
      map.set(s[i], val + 1);
    } else {
      map.set(s[i], 1);
    }
  }

  for (let i = 0; i < t.length; ++i) {
    if (map.has(t[i])) {
      const val = map.get(t[i]);
      if (val > 1) {
        map.set(t[i], val - 1);
      } else {
        map.delete(t[i]);
      }
    } else {
      return false;
    }
  }

  return true;
};

// using sorting
// time: O(N logN)
// space: O(1)
const isAnagramTwo = (s, t) => {
  if (s.length !== t.length) return false;

  s = Array.from(s).sort();
  t = Array.from(t).sort();

  for (let i = 0; i < s.length; ++i) {
    if (s[i] !== t[i]) return false;
  }

  return true;
};

module.exports = { isAnagram, isAnagramTwo };
