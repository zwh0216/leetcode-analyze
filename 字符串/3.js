/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let object = new Map()
  let start = 0
  let end = 0
  let max = 0
  const len = s.length

  while (end < len) {
    const char = s[end]

    if(!object.has(char)){
      object.set(char, true)
      if(end - start + 1 > max){
        max = end - start + 1
      }
      end++
    } else {
      const startChar = s[start]
      object.delete(startChar)
      start++
    }
  }

  return max
};