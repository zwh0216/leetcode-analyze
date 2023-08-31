/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const gcd = (n, k) => k !== 0 ? gcd(k, n % k) : n

  const len = nums.length
  const max = gcd(len, k)
  for (let start = 0; start < max; start++) {
    let current = start
    let next = (start + k) % len
    let temp = void 0
    do {
      const currentNum = temp
      temp = nums[next]
      nums[next] = currentNum ?? nums[current]
      current = next
      next = (next + k) % len
    } while (current !== start)
  }
};

// const test = () => {
//   const nums = [1, 2, 3, 4, 5, 6, 7],
//     k = 3
//   rotate(nums, k)
//   console.log('nums ->', nums);
// }
// test()

// const test2 = () => {
//   const nums = [-1, -100, 3, 99],
//     k = 2
//   rotate(nums, k)
//   console.log('nums ->', nums);
// }
// test2()

// const test3 = () => {
//   const nums = [3, 4, 5, 6, 1, 2],
//     k = 4
//   rotate(nums, k)
//   console.log('nums ->', nums);
// }
// test3()

const test4 = () => {
  const nums = [1],
    k = 1
  rotate(nums, k)
  console.log('nums ->', nums);
}
test4()