/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  if(pushed?.length !== popped?.length) return false

  const queue = []
  let pushedIndex = 0
  let poppedIndex = 0
  const pushedLen = pushed?.length
  const poppedLen = popped?.length

  while(pushedIndex < pushedLen){
    const pushedNum = pushed[pushedIndex]
    const poppedNum = popped[poppedIndex]
    const queueNum = queue[queue?.length - 1]

    if(pushedNum === poppedNum){
      pushedIndex++
      poppedIndex++
      continue
    }
    
    if(queueNum === poppedNum){
      poppedIndex++
      queue.pop()
      continue
    }

    queue.push(pushedNum)
    pushedIndex++
  }

  if(queue?.length){
    while(queue?.length){
      const queueNum = queue.pop()
      console.log('queueNum :>> ', queueNum);
      const poppedNum = popped[poppedIndex]
      if(queueNum !== poppedNum){
        return false
      }
  
      poppedIndex++
    }
  }

  return poppedIndex === poppedLen
};

(function test () {
  const pushed = [1,2,3,4,5]
  const popped = [4,5,3,2,1]
  const res = validateStackSequences(pushed, popped)
  console.log('res :>> ', res);
})()
