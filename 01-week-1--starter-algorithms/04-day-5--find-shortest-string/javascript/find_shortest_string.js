function findShortestString(arr) {
  // type your code here
  return arr.sort(function(a,b){return a.length - b.length })[0]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// run a sort function on the array
// since we are sorting by the length of the elements, we want an integer back
// we can sort integers by using a compare function
// the compare function iterates through the array and returns either negative, zero, or positive
// once the array is sorted, return the first element in the new array
// And a written explanation of your solution
