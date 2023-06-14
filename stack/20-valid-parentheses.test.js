const { isValid, isValidTwo } = require('./20-valid-parentheses');

test('s = "()" returns true', () => {
  expect(isValid('()')).toBe(true);
});

test('s = "()[]{}" returns true', () => {
  expect(isValid('()[]{}')).toBe(true);
});

test('s = "(]" returns false', () => {
  expect(isValid('(]')).toBe(false);
});

test('s = "()" returns true', () => {
  expect(isValidTwo('()')).toBe(true);
});

test('s = "()[]{}" returns true', () => {
  expect(isValidTwo('()[]{}')).toBe(true);
});

test('s = "(]" returns false', () => {
  expect(isValidTwo('(]')).toBe(false);
});
