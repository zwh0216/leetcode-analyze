/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  const len = ratings?.length
  let res = []
  for(let index = 0; index < len; index++){
    if(index - 1 < 0){
      res.push(1)
      continue
    }
    const current = ratings[index]
    const left = ratings[index - 1]
    if(current > left){
      const leftRating = res[index - 1]
      res.push(leftRating + 1)
    } else {
      res.push(1)
    }
  }

  let total = 0
  let rightRating = 1
  for(let index = len - 1; index >= 0; index--){
    if(index + 1 >= len){
      total = total + res[index]
      continue
    }
    const current = ratings[index]
    const right = ratings[index + 1]
    if(current > right){
      rightRating = rightRating + 1
    } else {
      rightRating = 1
    }
    const left = res[index]
    total = total + Math.max(left, rightRating)
  }

  return total
};

(function test1 () {
  const ratings = [1,0,2]
  const res = candy(ratings)
  console.log('res :>> ', res);
})();

(function test2 () {
  const ratings = [1,2,2]
  const res = candy(ratings)
  console.log('res :>> ', res);
})();

(function test2 () {
  const ratings = [1,3,2,2,1]
  const res = candy(ratings)
  console.log('res :>> ', res);
})();

