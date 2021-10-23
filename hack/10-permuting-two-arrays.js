// //Permuting Two Arrays\\
// /*
// There are two arrays of numbers, called A and B
// permutationsArray
// 	Permutation = (chars) => 
// 		if permutationArray does not include [a,d,s], then push onto array
// 		iterate and return swap outed
// */

// const findPermutation = (s) => {
// 	if (typeof s !== 'string' || !s) return 'Please enter a string'
// 	if (s.length <= 1) return s
// 	const permutationsArray = []
// 	const remainingChars = [...new Set(s.split('').map(char => char))]
	

// 	const permute = (n , chars) => {
// 		if (n === 1) return permutationsArray.push(chars.slice())
// 		while (n >= 1) {
// 			chars = [[chars[0], chars[1]].reverse().concat([...chars.slice(2)])]
// 			permutationsArray.push(chars.slice())
// 			permute(n - 1, chars)
// 		}

// 	}
// console.log(	permute(remainingChars.length, remainingChars))

// 	return permutationsArray
// }

// console.log(findPermutation('aadads'))

// // if (!permutationsArray) permutationsArray.push(chars)

// // else if (permutationsArray.filter(arr => arr !== chars)) {
// // 	const first = chars.shift()
// // 	chars.push(first)
// // 	permutationsArray.push(chars)
// // 	permute(chars)
// // } else {
	
// // }
// // return

let ar = [3, 2, 1, 0, -1, -2, 8]
ar.sort()
const medium = Math.floor(ar.length / 2)

