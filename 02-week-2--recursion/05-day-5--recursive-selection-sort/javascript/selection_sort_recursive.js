function selectionSortRecursive(arr) {
  // type your code here
  // output a new array from the input
  // specifically wants an empty array to be returned if the array is empty
  if (arr.length == 0){
    return []
  }
  // math min returns the smallest element in a given input, but not as an array
  let minimum = Math.min(...arr)
  // get that index number from the input array
  let index = arr.indexOf(minimum)
  // once you have that number, remove it from the input array
  arr.splice(index, 1)
  
  // test will be our output array
  let test = selectionSortRecursive(arr)
  // minimum gets moved into the new array
  test.unshift(minimum)
  // keep running test until the arr array is empty
  return test
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
