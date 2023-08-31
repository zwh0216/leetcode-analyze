/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const len = nums.length
  if (!len) return 0
  let apearNum = 0
  let slow = 0
  for (let index = 1; index < len; index++) {
    const featNum = nums[slow]
    const currentNum = nums[index]
    if (featNum === currentNum) {
      apearNum++
    } else {
      apearNum = 0
    }
    if (apearNum < 2) {
      slow++
      nums[slow] = nums[index]
    }
  }
  return slow + 1
};

function test1() {
  nums = [1, 1, 1, 2, 2, 3]
  const len = removeDuplicates(nums)
  console.log('len, nums ->', len, nums);
}
test1()