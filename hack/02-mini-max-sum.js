/*  Mini Max Sum
Given five positive integers, find the minimum and maximum values that can be calculated 
by summing exactly four of the five integers
		 Then print the respective minimum and maximum values as a single line of two space-separated long integers.
 */


let array = [1, 2, 3, 4, 5]

let miniMaxSum = (arr) => {
	let min = arr[0], max = arr[0]
	let minmax =  arr.sort().reduce((acc, _, index) => {
					let sum = 0 
					arr.filter((_, i) => i !== index).forEach(num => sum += num)
					if(!acc[0] || min < sum) acc[0] = sum
					if(!acc[1] || max > sum) acc[1] = sum 
					return acc
	}, [])
	console.log(minmax.toString().split(',').join(' '))
}

miniMaxSum(array)

// Input array of integers            | [1, 2, 3, 4, 5]
// minimum lowest sum; maximum sum    |  10, 14

// Notes 
// IN order to rotate through each number of the array, you must first map => filter (or possible reduce)
// In order the different combinations to appear, you need to make sure you return arrays that don't match the index
// Max & min are set to zero
// If the current is more than max, set max
// visa versa




// miniMaxSum = (arr) => {
// 	let min = null;
// 	let max = null;
// 	arr.map((_, index) => {
// 		var total = 0;
// 		let newArray = arr.filter((_, i) => i !== index);
// 		newArray.map((num) => { total = total + num })
// 		min = ((!!min && min < total) ? min : total)
// 		max = ((max <= total) ? total : max)
// 	});
// 	console.log(min, max)
// }

// miniMaxSum = (arr) => {
// 	min = max = current = 0
// 	let sorted = arr.sort()
// 	let arr2 = sorted.splice(num).map((num) => current += num)
// 	return arr2.reduce((acc, num) => {
// 		if (!min || min > current) acc[0] = current
// 		if (!max || max < current) acc[1] = current
// 		return acc
// 	}, [])
// }
