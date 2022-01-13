function recursiveCount(num = 0) {
  // type your code here
  if (num >= 10) {
    return
  }
  console.log(num)
  recursiveCount(++num)
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
//make a condiion for ending the loop
//console log the current value of num
// increment the value of num by 1, and THEn run recursiveCount() again
// if you use num++, it will instead use the same value and THEN increment.
// i believe this will lead to an extra logged output
// And a written explanation of your solution
