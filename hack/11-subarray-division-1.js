// Subarray Division 1 \\
/*
A chocolate bar, each with squares that have an integer on it.
Determine how many ways she can divide the chocolate.

	-Keys
		- contiguous segment (first come first serve)
		- m = length = birth month 
		- d = target = birth day

	[I] array of nums
	[I] [2,2,1,3,2]
			
		sort chocolate
		tempArr
		reduce array => 
			if tempArr length < month && sum === day
				add temp to accumulator
				splice numbers 
				clearTempArr
				recursive(arr)
			return array.length

	[O] total amount of ways the chocolate can be divided based on criteria
	[O] 2 // [[2,2],[1,3]].length
	
 */

// Inputs
let choc1 = [2, 2, 1, 3, 2], day1 = 4, month1 = 2, expected1 = 2
let choc2 = [1, 2, 1, 3, 2], day2 = 3, month2 = 2, expected2 = 2

// Function
const birthday = (choc = s, day = d, month = m) => {
	return choc.reduce((acc,_,i) => {
		const sum = choc.slice(i, i + month).reduce((a, c) => a + c)
		sum === day && acc++
		return acc
	}, 0)
}

// Test Kit 
const assertEqual = (a, e) => a === e ? `passed` : `Failed! You got ${a} instead of ${e}`

// Test Suites
const actual1 = birthday(choc1, day1, month1)
const assert1 = assertEqual(actual1, expected1)

const actual2 = birthday(choc1, day1, month1)
const assert2 = assertEqual(actual2, expected2)

console.log(assert1)
console.log(assert2)