// Strong Password
/* 
  Given the string she typed, 
  can you find the minimum number of characters she must add?

  Criteria
  - Length >= 6
  - One Number
  - One lowercase
  - One Uppercase
  - One Special Char
  
  Input = (3, 'Ab1') 
    declare counter
    If password doesn't include capital, add one to counter
    IF password doesnt include lowercase, add one to counter
    If password doesnt include special char, add one to counter
    if password doesnt include a number, add one to counter
    let sum = 6 - N + Counter
    If sum is <= 6; sum += 6 - N
  Output = 3
*/


let inputs, actual, expected, results, test = (a, e) => a === e ? true : `a:${a} !== e:${e}`,
  minimumNumber = (n, password) => {
    let numbers = "0123456789";
    let lower_case = "abcdefghijklmnopqrstuvwxyz";
    let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let special_characters = "!@#$%^&*()-+";  
    let charsMissing = password.split('').reduce((acc, char) => {
      if(numbers.includes(char)) acc++
      if(lower_case.includes(char)) acc++
      if(upper_case.includes(char)) acc++
      if(special_characters.includes(char)) acc++
      return acc
    }, 0)
    return charsMissing
  };



// Test One
// inputs = { n: 3, password: 'Ab1' };
// actual = (minimumNumber(inputs.n, inputs.password));
// expected = 3;
// results = test(actual, expected);
// console.log(results);;

// Test Two
inputs = {n: 11, password: '#HackerRank'}
actual = (minimumNumber(inputs.n, inputs.password))
expected = 3
results = test(actual, expected)
console.log(results)