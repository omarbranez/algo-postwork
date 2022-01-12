function reverseString(str) {
  // type your code here
  let newString = '' 
  for (i = str.length -1; i >=0; i--){
    newString = newString + str[i]
  }
  return newString
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

// create an empty array (empty string) to store the reversed letters
// iterate over the original string, beginning at the end, and work backwards
// add each element of the original string in reverse order to the new string
// return the empty string when finished iterating 
