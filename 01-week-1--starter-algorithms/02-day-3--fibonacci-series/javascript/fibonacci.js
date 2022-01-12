function fibonacci(num) {
  // type your code here
  let arr = new Array(0,1)
  for (let i=1; i < num; i++)
    arr.push(arr[i-1] + arr[i])
    return arr[num]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// create an array with the first two numbers in the sequence
// iterate beginning at 1 since we want the position, not the index
// add numbers to the array as per the fibonacci sequence (each number is the sum of the previous two)
// return what's at the [num] position
// And a written explanation of your solution

// the sequence requires the first two numbers in order to make the third, so have to manually define those
// we continually creating new values in the sequence by adding the previous two, until we reach the position input
// we then return the number at that position
// this will create a very large array with a large input, however