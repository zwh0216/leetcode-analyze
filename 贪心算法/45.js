/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let index = 0
  let step = 0
  const len = nums.length - 1

  while(index < len){
    if(index + nums[index] >= len){
      return step + 1
    }
    
    const maxIndex = index + nums[index]
    let curIndex
    for(let i = index + 1; i <= maxIndex; i++){
      if(!curIndex || nums[i] + i >= nums[curIndex] + curIndex){
        curIndex = i
      }
    }

    step++
    index = curIndex
  }

  return step
};


function test3 (){
  const nums = [10,9,8,7,6,5,4,3,2,1,1,0]
  const res = jump(nums)
  console.log('res ->', res)
}
test3()

function test (){
  const nums = [2,3,1,1,4]
  const res = jump(nums)
  console.log('res ->', res)
}
test()

function test2 (){
  const nums = [2,3,0,1,4]
  const res = jump(nums)
  console.log('res ->', res)
}
test2()