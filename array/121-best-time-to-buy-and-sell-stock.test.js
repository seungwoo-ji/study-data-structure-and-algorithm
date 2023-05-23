const maxProfit = require('./121-best-time-to-buy-and-sell-stock');

test('prices = [7,1,5,3,6,4] returns 5', () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
});

test('prices = [7,6,4,3,1] returns 0', () => {
  expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
});
