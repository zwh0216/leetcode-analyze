/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  const moveLeft = (list, startIndex, endIndex) => {
    for (let index = endIndex; index >= startIndex; index--) {
      list[index] = list[index - 1]
    }
  }
  let index2 = 0
  for (let index1 = 0; index1 <= m + n - 1; index1++) {
    if (index2 === n) {
      break
    }
    const num1 = nums1[index1]
    const num2 = nums2[index2]
    if (index1 > m - 1 + index2) {
      nums1[index1] = num2
      index2++
    } else {
      if (num1 > num2) {
        // nums1.splice(index1, 0, num2)
        moveLeft(nums1, index1, m + n - 1)
        nums1[index1] = num2
        index2++
      }
    }
  }
};

function test1() {
  const nums1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    m = 0,
    nums2 = [-50, -50, -48, -47, -44, -44, -37, -35, -35, -32, -32, -31, -29, -29, -28, -26, -24, -23, -23, -21, -20, -19, -17, -15, -14, -12, -12, -11, -10, -9, -8, -5, -2, -2, 1, 1, 3, 4, 4, 7, 7, 7, 9, 10, 11, 12, 14, 16, 17, 18, 21, 21, 24, 31, 33, 34, 35, 36, 41, 41, 46, 48, 48],
    n = 63
  merge(nums1, m, nums2, n)
  console.log('nums1 ->', nums1);
}
test1()

// function test2() {
//   const nums1 = [1, 2, 3, 0, 0, 0],
//     m = 3,
//     nums2 = [2, 5, 6],
//     n = 3
//   merge(nums1, m, nums2, n)
//   console.log('nums1 ->', nums1);
// }
// test2()