let triangleNumber = (nums) => {
  let solution = 0;
  for (let a = 0; a < nums.length; a++) {
    for (let b = 0; b < nums.length; b++) {
      if (b === a) {
        break;
      }
      for (let c = 0; c < nums.length; c++) {
        if (c === b || c === a) {
          break;
        }
        if (nums[a] + nums[b] > nums[c] && nums[a] + nums[c] > nums[b] && nums[b] + nums[c] > nums[a]) {
          solution++;
        }
      }
    }
  }
  return solution;
};