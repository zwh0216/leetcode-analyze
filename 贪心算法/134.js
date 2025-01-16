/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let sum = 0
  let min
  let index = 0
  const len = gas.length
  for(let i = 0; i < len; i++){
    sum += gas[i] - cost[i]
    if(!min || sum < min){
      min = sum
      index = i === len - 1 ? 0 :  i + 1
    }
  }

  return sum >= 0 ? index : -1
};

function test () {
  const gas = [3,1,1]
  const cost = [1,2,2]
  const res = canCompleteCircuit(gas, cost)
  console.log('res ->', res);
}
test()