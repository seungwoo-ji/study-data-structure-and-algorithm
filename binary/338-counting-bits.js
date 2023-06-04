/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = (n) => {
  const result = new Array(n + 1);

  for (let i = 0; i <= n; ++i) {
    let num = i;
    let count = 0;

    while (num !== 0) {
      count += num % 2; // get the Least Significant Bit (LSB) and add it to the count
      // num = Math.floor(num / 2);  // right shift the bits OR
      num >>>= 1;
    }

    result[i] = count;
  }

  return result;
};

// recursive solution
const countBitsTwo = (n) => {
  const result = new Array(n + 1);

  const recursion = (n) => {
    if (n === 0) return 0;

    // note that the only way to make odd number is by adding the LSB (2^0) to the previous even number
    // return n % 2 === 0 ? recursion(Math.floor(n / 2)) : recursion(n - 1) + 1;
    // return n % 2 === 0 ? recursion(n >>> 1) : recursion(n - 1) + 1;

    // When n is odd number, n[n] = n[n / 2] + 1. This is because n / 2 simply means the bits are right shifted and we add by one to
    // compensate the lost LSB.
    return n % 2 === 0 ? recursion(n >>> 1) : recursion(n >>> 1) + 1;
  };

  for (let i = 0; i <= n; ++i) {
    result[i] = recursion(i);
  }

  return result;
};

// utilizing memoization (DP) to optimize the previous solutions
const countBitsThree = (n) => {
  const result = new Array(n + 1);

  const recursion = (n, memo) => {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (memo[n]) return memo[n];

    if (n % 2 === 0) {
      memo[n] = recursion(n >>> 1, memo);
      return memo[n];
    } else {
      memo[n] = recursion(n >>> 1, memo) + 1;
      return memo[n];
    }
  };

  for (let i = 0; i <= n; ++i) {
    result[i] = recursion(i, result);
  }

  return result;
};

const countBitsFour = (n) => {
  const result = new Array(n + 1);

  result[0] = 0;

  for (let i = 1; i <= n; ++i) {
    result[i] = result[i >>> 1] + (i % 2);
  }

  return result;
};

module.exports = { countBits, countBitsTwo, countBitsThree, countBitsFour };
