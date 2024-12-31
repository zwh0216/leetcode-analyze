/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const len = nums.length;
  if (len === 1) return true;
  let maxStep = nums[0];
  for (let index = 1; index <= maxStep; index++) {
    maxStep = Math.max(maxStep, index + nums[index]);
    if (maxStep >= len - 1) return true;
  }
  return false;
};

const mock1 = () => {
  const nums = [2, 3, 1, 1, 4];
  const res = canJump(nums);
  console.log("res ->", res);
};

const mock2 = () => {
  const nums = [3, 2, 1, 0, 4];
  const res = canJump(nums);
  console.log("res ->", res);
};

const mock3 = () => {
  const nums = [0, 1];
  const res = canJump(nums);
  console.log("res ->", res);
};

const mock4 = () => {
  const nums = [1, 0, 2];
  const res = canJump(nums);
  console.log("res ->", res);
};

const mock5 = () => {
  const nums = [3, 0, 8, 2, 0, 0, 1];
  const res = canJump(nums);
  console.log("res ->", res);
};

const mock6 = () => {
  const nums = [0];
  const res = canJump(nums);
  console.log("res ->", res);
};

// mock1();
// mock2();
// mock3();
// mock4();
// mock5();
mock6();
