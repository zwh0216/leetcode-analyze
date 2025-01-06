/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let header = null
  let current = null
  let tensDigit = 0
  let unitsDigit = 0

  while(l1 || l2){
    const curSum = (l1?.val ?? 0) + (l2?.val ?? 0) + tensDigit
    tensDigit = Math.floor(curSum / 10)
    unitsDigit = curSum % 10
    const curNode = new ListNode(unitsDigit)

    if(!header){
      header = current = curNode
    } else {
      current.next = curNode
      current = curNode
    }
    l1 = !!l1.next && l1.next
    l2 = !!l2.next && l2.next
  }

  if(tensDigit > 0){
    const curNode = new ListNode(tensDigit)
    current.next = curNode
  }

  return header
};