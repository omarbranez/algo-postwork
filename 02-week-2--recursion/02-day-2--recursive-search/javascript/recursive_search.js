function recursiveSearch(arr, target) {
  // type your code here
  // iterative
  // if (arr.length > 0) { 
  //   if (arr.find(element => element == target)){
  //     return true
  //   } else {
  //     return false
  //   }
  // } else {
  //   return false
  // }

  while (arr.length > 0) {
    if (arr.find(element => element == target)){
      return true
    } else {
      recursiveSearch(arr.shift(), target)
    }
  }
    if (arr.length == 0){
      return false
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
// arr is an array , target is a number that either exists or doesnt in arr
// iterate over the array and see if that element equals target
// no duplicates
// And a written explanation of your solution
// if an element matches the target, break the loop and return true
// otherwise, remove that element from the array and work on a smaller array
// if the array is empty, there wasnt a match
// therefore, return true
