/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  const len = citations.length
  const list = citations.sort((a, b) => a - b)

  let res = 0
  for(let i = 0; i < len; i++){
    const value = list[i]
    if(value >= len - i){
      return len - i
    }
  }

  return res
};

function test ()  {
  const list = [3,0,6,1,5]
  const res = hIndex(list)
  console.log('res ->', res);
}
test()

function test1 ()  {
  const list = [1,3,1]
  const res = hIndex(list)
  console.log('res ->', res);
}
test1()

function test2 ()  {
  const list = [0, 0]
  const res = hIndex(list)
  console.log('res ->', res);
}
test2()