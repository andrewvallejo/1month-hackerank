// Grid Challenge 
/* 
» Given a square grid of characters in the range ascii[a-z]
» grid = ['abc', 'ade', 'efg']
  >Iterate through grid
    -Rearrange elements of each row alphabetically, ascending. 
    > Sort through the each array && 
      split each char and separate them into their own arrays

  -Determine if the columns are also in ascending alphabetical order, top to bottom. 
    >Iterate with Reduce through the sorted grid
      >Return Acc {key = index: value = true/false}
    >Iterate through acc.values
      > if any are false then return 'no'
      > if true then return 'yes'
    >Return response 
« Return 'YES' if they are 
« Return 'NO' if they are not.
*/

function gridChallenge(grid) {
  const cleanGrid = 
    grid.reduce((acc, str) => {
    acc.push(str.split('').sort());
    return acc;
  }, []);

  const superCleanGrid = cleanGrid.reduce((acc, arrOfStr) => {
    arrOfStr.map((char, i) => !acc[i] ? acc[i] = char : acc[i] += char);
    return acc;
  }, {});
  

  const determineResponse = Object.values(superCleanGrid).reduce((acc, arrOfStr) => {
    arrOfStr === arrOfStr.split('').sort().join('') ? acc.push('YES') : acc.push('NO')
    return acc;
  }, []);

  const finalDetermination = determineResponse.every(response => response === 'YES')
  const response = finalDetermination ? 'YES' : 'NO'
  return response;
}


// Test Suite
let test = (a, e) => a === e ? 'pass!' : `Got ${a} but should've got ${e}`;

// T1
let grid = [
  'abc',
  'ade',
  'efg'
];
let actual, results, expected;
actual = (gridChallenge(grid)); expected = 'YES'; results = test(actual, expected);
/* outcome */ console.log('T1 ', results);

// T2
grid = [
  'ebacd',
  'fghij',
  'olmkn',
  'trpqs',
  'xywuv'
];

actual = (gridChallenge(grid)); expected = 'YES'; results = test(actual, expected);
/* outcome */ console.log('T2 ', results);

// T3
grid = [
  'mpxz',
  'abcd',
  'wlmf'
];

actual = (gridChallenge(grid)); expected = 'NO'; results = test(actual, expected);
/* outcome */ console.log('T3 ', results);


// T3
grid = [
  'sur',
  'eyy',
  'gxy',
];

actual = (gridChallenge(grid)); expected = 'NO'; results = test(actual, expected);
/* outcome */ console.log('T4 ', results);
