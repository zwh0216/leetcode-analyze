
var RandomizedSet = function() {
    this.map = new Map()
    this.list = []
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    const index = this.map.get(val);
    if(!!index || index === 0){
      return false
    }

    this.list.push(val)
    this.map.set(val, this.list.length - 1)
    return true
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  const index = this.map.get(val);
  if(!index && index !== 0){
    return false
  }

  const lastIndex = this.list.length - 1
  const lastVal = this.list[lastIndex]
  const delIndex = this.map.get(val)
  this.map.set(lastVal, delIndex)
  this.list[delIndex] = lastVal

  // 删除
  this.list.pop()
  this.map.delete(val)
  return true
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const len = this.list.length
    if(len === 0){
      return this.list[0]
    }

    const randomIndex = Math.floor(Math.random() * len)
    return this.list[randomIndex]
};

/** 
 * Your RandomizedSet map will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */