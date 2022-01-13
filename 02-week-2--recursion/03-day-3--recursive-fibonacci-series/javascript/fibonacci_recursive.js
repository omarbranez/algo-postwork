function fibonacci(n) {
  // type your code here
  if (n < 2) {
    return n
  } else {
    return fibonacci(n-1) + fibonacci(n-2)
    // let arr = new Array(0,1)
    // what to do to the n argument
    // if n = 10, output 55
    // if n - 1 == 9, output 34 somehow
    // if n - 1 - 1 == 8 , output 21 somehow  
    // start the other way, the base cases
    // fibonacci(10) => fibonacci(9) + fibonacci(8)
    //             fibonacci(8) + fibonacci(6) + fibonacci(7) + fibonacci(6)
    //           fib(7) + fib(6) + fib(5) + fib(4) + fib(6) + fib(5) + fib(5) + fib(4)
    //     fib(6) + fib(5) + fib(5) + fib(4) + fib(4) + fib(3) + fib(3) + fib(2) + fib(5) + fib(4) + fib(4) + fib(3) + fib(4) + fib(3) + fib(3) + fib(2)
    //   fib(5) + fib(4)+ fib(4) + fib(3)+ fib(4) + fib(3)+ fib(3) + fib(2) + fib(3) + fib(2) +fib(2) + 1 + fib(2) + 1 + 1+ 0  

    //   fib (2) => fib(1) + fib(0)
    //               1+ 0
    //   fib(3) => fib(2) + fib(1)
    //           1 + 0 + 1
    //           2
    //   fib(4) =>       fib(3) + fib(2)
    //           fib(2) + fib(1) + fib(1) + fib(0)
    //     fib(1) + fib(0) + 1 +  0 + 1 + 0 + 0 + 0
    //   1 + 0 +    + 0   + 1 +  0 + 1 + 0 + 0 + 0
    //   3 OR fib(3) + fib(2)

    //   fib(5)=> fib(4) + fib(3)
    //           fib(3) + fib(2) +  2
    //         2 + 1 + 2 = 5
                  // 3 + 2 = 5
                  // OR 
                  // fib(4)+fib(3)

  }
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
// And a written explanation of your solution
// beginning with the base case, 
// we reduce the value of the input until it is less than 2
// at that point, it adds 1 to the total value
// because of greatest common factors, we determine that 
// a given fibonacci number is the sum of 
// the fibonacci number before it, and the one two before it
// aka n-1, and n-2
