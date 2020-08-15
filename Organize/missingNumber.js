var missingNumber = function(nums) {
  nums = nums.sort(function(a,b){
      return a-b
  })

  if(nums[0] !== 0){
      return 0
  }
  var numbersStorage = {};
  for(var i = 0; i < nums.length; i++) {
    if(!numbersStorage[nums[i]]){
      numbers[nums[i]] = nums[i]
    }
  }
  for(var z = 0; z <= nums.length; z++) {
    if(!numbers[z]){
      return z;
    }
  }
};
