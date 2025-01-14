/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const left = []
    const right = []
    const len = nums.length

    left[0] = 1
    for (var i = 1; i < len; i++) {
      left[i] = left[i - 1] * nums[i - 1]
    }

    right[len - 1] = 1
    for(let i = len - 2; i >= 0; i--){
      right[i] = right[i + 1] * nums[i + 1]
    }

    const res = []
    for(let i = 0; i < len; i++) {
      res[i] = left[i] * right[i]
    }

    return res
};

function test () {
  const nums = [1,2,3,4]
  const res = productExceptSelf(nums)

  console.log('res ->', res);
}
test()


function test1 () {
  const nums = [-1,1,0,-3,3]
  const res = productExceptSelf(nums)
  
  console.log('res ->', res);
}
test1()