function findFirstDuplicate(arr) {
  // type your code here
  let dupe = ''
  for (i = 0; i < arr.length; i++) {
    if ( arr[i] == arr[i+1]) {
      dupe = arr[i]
    } }
    if (dupe.length == 0 ) {
      dupe = -1
    }
    return dupe
  

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
// create an empty array
// iterate over given array
// if the element at a given index is the same as the element at the following index, add it to the new array
// if the new array is still empty, add the integer -1 to the empty array
// return the new array