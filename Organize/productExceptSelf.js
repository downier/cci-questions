var productExceptSelf = function(nums) {
  debugger
  var output = [];
  var left = 1;
  var right = 1;
  for (var i = (nums.length - 1); i >= 0; i--) {
    output[i] = right;
    right *= nums[i];
  }
  for (var j = 0; j < nums.length; j++) {
    output[j] *= left;
    left *= nums[j];
    console.log(left)
  }
  console.log(left)
  return output;
};

var testArray = [1, 2, 3, 4];

console.log(productExceptSelf(testArray))