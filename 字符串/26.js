/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let realIndex = 0
  for (let index = 1; index <= nums.length; index++) {
    const realNum = nums[realIndex]
    const num = nums[index]
    console.log('realIndex ->', realIndex, realNum);
    console.log('num ->', num);
    if (num > realNum) {
      realIndex++
      if (realIndex !== index) {
        nums[realIndex] = nums[index]
      }
    }
  }
  return realIndex + 1
};

function test1() {
  const nums = [1, 1, 1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 9, 10]
  const index = removeDuplicates(nums)
  console.log('index, nums ->', index, nums);
}
test1()