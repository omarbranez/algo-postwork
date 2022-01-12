function selectionSort(arr) {
  // type your code here
  // let x
  let leng = arr.length
  for (let i=0; i < leng; i++){
      let y = i
    for(let x=i+1; x < leng; x++){
      if (arr[x] < arr[y]) {
        y = x
      }
    }
    if (y != i) {
      [arr[y], arr[i]] = [arr[i], arr[y]]
    }
  }
    return arr

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
