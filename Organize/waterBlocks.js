let waterBlocks = (blocks) => {
  let total = 0; 
  //atleast 3 towers are necessary to hold any water
  if(blocks.length < 3) return total
  
  for(let i = 1; i < blocks.length; i++){
  //edge cases are craaaay  
  }
  
  
  return total;
};


//[1, 4, 1, 3, 1, 5, 3, 1, 4, 3, 1, 2, 3, 2, 2, 3, 4] should contain 23 water


// Water Blocks

// You are given an input array where each element represents the height of a line of towers. 

// The width of every tower is 1.
// It starts raining. How much water is collected between the towers? 
// Eg. Input: [5, 2, 3, 2, 1, 3]
// Output: 4
// Visualization:

// '-' is water
//  '#' is a block

// #
// #
// # - # -  - #
// # # # # - #
// # # # # # #

// Remember the rules of how to answer technical prompts. Try and go from a working naive solution to a working ideal solution.
