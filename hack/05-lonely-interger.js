//Lonely Integer\\
/* 
Given an array of integers, 
	-where all elements but one occur twice, 
find the unique element.

Pseudo
[i] = [1, 2, 3, 4, 3, 2, 1]
	// filter through array return number.length of 0
[o] = 4
*/


let a = [1, 2, 3, 4, 3, 2, 1]

const lonelyinteger = (arr) => {
	return arr.reduce((acc, curNum) => {
		const oddOneOut = arr.filter(num => num !== curNum).length
		if (oddOneOut % 2 === 0) acc = curNum
		return acc
	}, 0)
}

console.log(lonelyinteger(a))


