const {
  minCostClimbingStairs,
  minCostClimbingStairsTwo,
  minCostClimbingStairsThree,
  minCostClimbingStairsFour,
} = require('./746-min-cost-climbing-stairs');

test('cost = [10,15,20] returns 15', () => {
  expect(minCostClimbingStairs([10, 15, 20])).toBe(15);
});

test('cost = [1,100,1,1,1,100,1,1,100,1] returns 6', () => {
  expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6);
});

test('cost = [10,15,20] returns 15', () => {
  expect(minCostClimbingStairsTwo([10, 15, 20])).toBe(15);
});

test('cost = [1,100,1,1,1,100,1,1,100,1] returns 6', () => {
  expect(minCostClimbingStairsTwo([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(
    6
  );
});

test('cost = [10,15,20] returns 15', () => {
  expect(minCostClimbingStairsThree([10, 15, 20])).toBe(15);
});

test('cost = [1,100,1,1,1,100,1,1,100,1] returns 6', () => {
  expect(minCostClimbingStairsThree([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(
    6
  );
});

test('cost = [10,15,20] returns 15', () => {
  expect(minCostClimbingStairsFour([10, 15, 20])).toBe(15);
});

test('cost = [1,100,1,1,1,100,1,1,100,1] returns 6', () => {
  expect(minCostClimbingStairsFour([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(
    6
  );
});
