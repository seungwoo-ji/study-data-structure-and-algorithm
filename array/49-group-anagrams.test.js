const { groupAnagrams, groupAnagramsTwo } = require('./49-group-anagrams');

test('strs = ["eat","tea","tan","ate","nat","bat"] returns [["bat"],["nat","tan"],["ate","eat","tea"]]', () => {
  expect(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toEqual([
    ['eat', 'tea', 'ate'],
    ['tan', 'nat'],
    ['bat'],
  ]);
});

test('strs = [""] returns [[""]]', () => {
  expect(groupAnagrams([''])).toEqual([['']]);
});
test('strs = ["a"] returns [["a"]]', () => {
  expect(groupAnagrams(['a'])).toEqual([['a']]);
});

test('strs = ["eat","tea","tan","ate","nat","bat"] returns [["bat"],["nat","tan"],["ate","eat","tea"]]', () => {
  expect(groupAnagramsTwo(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toEqual([
    ['eat', 'tea', 'ate'],
    ['tan', 'nat'],
    ['bat'],
  ]);
});

test('strs = [""] returns [[""]]', () => {
  expect(groupAnagramsTwo([''])).toEqual([['']]);
});
test('strs = ["a"] returns [["a"]]', () => {
  expect(groupAnagramsTwo(['a'])).toEqual([['a']]);
});
