// Diagonal Difference \\
/*

Input:
Given a square matrix, 
1 2 3
4 5 6
9 8 9  



Output:
calculate the absolute difference between the sums of its diagonals.
2
*/

const TestCase0 = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]
const TestCase1 = [[1, 2, 3], [4, 5, 6], [9, 8, 9]]

const expected0 = 15
const expected1 = 2

// test suite
const testDiagonals = (expected, actual) => {
	if (expected === actual) {
		return `Woo, you got it right!`
	} else {
		return `Whoops! You got ${actual} but you should've gotten ««(${expected})»»`
	}
}

// Function
const diagonalDifference = (arr) => {
	let firstCorner = arr.reduce((acc, numArr, i) => acc+=numArr[i], 0)
	let secondCorner = arr.reverse().reduce((acc, numArr, i) => acc+=numArr[i], 0)
	let corners = [firstCorner, secondCorner].sort((a,b) => a - b)
	let difference = corners[1] - corners[0]
	return difference
}

// Results
const test0 = testDiagonals(expected0, diagonalDifference(TestCase0))
const test1 = testDiagonals(expected1, diagonalDifference(TestCase1))

console.log(test0)
console.log(test1)