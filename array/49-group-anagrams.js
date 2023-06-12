/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// hash after sorting
// time: O(M * N log N)
// space: O(M * N)
const groupAnagrams = (strs) => {
  if (strs.length === 1) return [[strs[0]]];

  const map = new Map();

  for (const word of strs) {
    const sorted = Array.from(word).sort().toString();
    const values = map.get(sorted) || [];

    values.push(word);
    map.set(sorted, values);
  }

  return [...map.values()];
};

// hash map
// time: O(M * N);
// space: O(M * N)
const groupAnagramsTwo = (strs) => {
  if (strs.length === 1) return [[strs[0]]];

  const map = new Map();

  for (const word of strs) {
    const key = new Array(26).fill(0);

    for (const letter of word) {
      const index = letter.charCodeAt(0) - 'a'.charCodeAt(0);
      key[index]++;
    }

    const keyStr = key.toString();
    const values = map.get(keyStr) || [];
    values.push(word);
    map.set(keyStr, values);
  }

  return [...map.values()];
};

module.exports = { groupAnagrams, groupAnagramsTwo };
