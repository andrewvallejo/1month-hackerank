// Spare Array \\
/* 
 There is a collection of input strings and a collection of query strings.
 For each query string, determine how many times it occurs in the list of input strings.
 Return an array of the results. 

 -Notes
	- string strings[n] - an array of strings to search
	- string queries[q] - an array of query strings

	-Pseudo Code
	Input: (strings, queries)
		acc -> filter
		iterate through strings, reduce default is {}
			filter through queries
				if query matches for the first time; create new key and set it to 1
				if query matches for the second time; add 1 to count
			Map through values 	
			sort array (large -> smallest)
			return acc
	Output: [2, 1, 0] <- amount of matches (highest to lowest?)
*/

// let strings = ['def', 'de', 'fgh']
// let queries = ['de', 'lmn', 'fgh']

let strings = ['aba', 'baba', 'aba', 'xzxb']
let queries = ['aba','xzxb', 'ab']

// function matchingStrings(strings, queries) {
// 	const matched = queries.reduce((acc,query) => {
// 		strings.filter((string) => {
// 			if (string === query  && !acc[string]) {
// 				acc[string] = 1
// 			} else if (string === query && acc[string]){
// 				acc[string]++
// 			} else if (!acc[string]) {
// 				acc[string] = 0
// 			} 
// 		})
// 		return acc
// 	}, {})
// 	console.log(matched)
// }


function matchingStrings(strings, queries) {
	const matched = queries.reduce((acc,query) => {
		let outcome = strings.filter((string) => string === query).length;
		acc.push(outcome)
		return acc
	}, [])
	return matched
}


let results = matchingStrings(strings, queries)
console.log(results)
