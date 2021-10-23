
// Pangrams \\

/*
	A pangram is a string that contains every letter of the alphabet. 
	
	Given a sentence 
		edgeCases
			Ignore case.
		declare an array with the alphabets
		determine whether it is a pangram in the English alphabet. 
			map -> filter (check to see if each letter matches)	
	Return either pangram or not pangram as appropriate.

*/

// Function
const pangrams = (s) => {
	let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''), 
			string = s.toLowerCase().split(''),
			abcBox = []
	string.map(char => alphabet.map(abc => !abcBox.includes(char) && abc === char && abcBox.push(abc)))
	return abcBox.length >= 26 ? 'pangram':'not pangram'
}

// Test Suite
const affirmEqual = (actual, expect) => actual === expect ? 'test passes!' : 'test fails!'

// Test Cases
let s1 = 'The quick brown fox jumps over the lazy dog', 
		e1 = 'pangram',
		t1 = pangrams(s1);
let s2 = 'We promptly judged antique ivory buckles for the prize',
		e2 = 'not pangram',
		t2 = pangrams(s2);

console.log(t1)
console.log(t2)
console.log(affirmEqual(e1, t1))
console.log(affirmEqual(e2, t2))

