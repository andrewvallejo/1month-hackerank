//Max Min\\
/* 
You will be given a list of integers, arr, and a single integer. 
You must create an array of length from elements of arr such that its unfairness is minimized.
  Call that array arr1. 
Unfairness of an array is calculated as 
  max(arr1) - min(arr1)

Where: 
- max denotes the largest integer in  
- min denotes the smallest integer in 

What: 
- Nums in arr may not be unique
- Return  the combo with the smallest difference
- Test call combos

How: 
  [i] (4 (combos), [1, 2, 3, 4, 10, 20, 30, 40, 100, 200] )
    declare smallestDifference to 0
    iterate through each number,
      With each iteration, splice off K amount
      Get max of K chunk, min of K chunk
      if smallest is 0, then replace it
      if currChunk is bigger then move on
      if smaller, than replace smallestdifference
    return smallest
  [o] 3
*/

// const readLine = (k, arr) => {
//   arr.sort();
//   return arr.reduce((smallestDiff, currNum, i) => {
//     const chunk = arr.filter(num => arr.splice(i, k));
//     if (!smallestDiff) smallestDiff = chunk;
//     if (!smallestDiff >= chunk) smallestDiff = chunk;
//     return smallestDiff;
//   }, 0);
// };

// Test Suites
let scenario, actual, test = (a, e) => a === e ? true : `[a]:${a} !== [e]:${e}`;


// const maxMin = (k, arr) => {
//   return arr.sort().map((num, i) => arr[i + k - 1] - num)
// }

function maxMin(k, arr) {
  return arr.sort((a, b) => a - b)
    .map((val, i) => (arr[i + k - 1] - val))
    // .reduce((prev, cur) =>
      // prev > cur ? cur : prev);
}

/* Scenario 1 */ scenario = { arr: [1, 4, 7, 2], k: 2, e: [1, 2]};
console.log(test(maxMin(scenario.k, scenario.arr) , scenario.e))

// /* Scenario 2*/ scenario = { arr: [10, 100, 300, 200, 1000, 20, 30], k: 3, e: [20] };
// console.log(test(maxMin(scenario.k, scenario.arr), scenario.e));

// /* Scenario 3 */ scenario = { arr: [1, 2, 3, 4, 10, 20, 30, 40, 100, 200], k: 4, e: [3], a: readLine(this.arr, this.k) };
// console.log(test(scenario.a, scenario.e))


// Online Solutions



