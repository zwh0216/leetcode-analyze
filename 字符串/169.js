/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const len = nums.length
  if (len === 1) {
    return nums[0]
  }
  let res = null
  const map = {}
  for (let index = 0; index < len; index++) {
    const num = nums[index]
    const currentCount = map[num]
    if (currentCount) {
      map[num] = currentCount + 1
      if (currentCount + 1 > len / 2) {
        res = num
        break
      }
    } else {
      map[num] = 1
    }
  }
  return res
};

function test1() {
  const nums = [3, 2, 3]
  const res = majorityElement(nums)
  console.log('res ->', res);
}
test1()