/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = (a, b) => {
  // loop #1
  //     a = 0 0 1 1 = 3
  //     b = 0 1 1 0 = 6
  // a ^ b = 0 1 0 1 (sum without carry)
  // a & b = 0 0 1 0 << 1 = 0 1 0 0 (carry)
  //
  // loop #2
  //     a = 0 1 0 1 = 5
  //     b = 0 1 0 0 = 4
  // a ^ b = 0 0 0 1
  // a & b = 0 1 0 0 << 1 = 1 0 0 0
  //
  // loop #3
  //     a = 0 0 0 1 = 1
  //     b = 1 0 0 0 = 8
  // a ^ b = 1 0 0 1
  // a & b = 0 0 0 0 (nothing to carry)
  while (b != 0) {
    const carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }

  return a;
};

const getSumRecursive = (a, b) => {
  if (b === 0) return a;

  return getSumRecursive(a ^ b, (a & b) << 1);
};

module.exports = { getSum, getSumRecursive };
