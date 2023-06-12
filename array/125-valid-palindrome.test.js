const { isPalindrome } = require('./125-valid-palindrome');

test('s = "A man, a plan, a canal: Panama returns true', () => {
  expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
});

test('s = "race a car" returns false', () => {
  expect(isPalindrome('race a car')).toBe(false);
});

test('s = " " returns true', () => {
  expect(isPalindrome(' ')).toBe(true);
});
