function balancingParentheses(string) {
  // type your code here
  let end = 0
  let front = 0

  for (let i = 0; i < string.length; ++i) {
    if (string[i] === '(') {
      ++openings
      continue
    }

    if (front > 0) {
      --front
    } else {
      ++end
    }
  }
  return end + front
}

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
