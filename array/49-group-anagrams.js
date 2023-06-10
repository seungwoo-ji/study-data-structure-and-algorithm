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

module.exports = { groupAnagrams };
