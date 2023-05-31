/**
 * @param {number[]} heights
 * @return {number}
 */
const maxArea = (heights) => {
  let left = 0;
  let right = heights.length - 1;
  let max = 0; // all heights are non-negative numbers

  while (left < right) {
    const area = Math.min(heights[left], heights[right]) * (right - left);
    max = Math.max(area, max);

    // we move the pointer of the shorter height because the shorter height determines the area no matter how big the other
    // side gets. If the pointer of the bigger height moves, the area would only get smaller because the height remains the same while
    // the width gets smaller. Thus, the only way to obtain possibly bigger area is to move the pointer of shorter height.
    if (heights[left] > heights[right]) {
      right--;
    } else {
      left++;
    }
  }

  return max;
};

module.exports = maxArea;
