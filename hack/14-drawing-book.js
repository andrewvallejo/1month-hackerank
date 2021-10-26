//Drawing Books\\ [Incomplete]
/* 
They can start at the beginning or the end of the book.
They always turn pages one at a time.
When they open the book, page 1 is always on the right side
When they flip page 1, they see pages 2 and 3. 
Each page except the last page will always be printed on both sides.
The last page may only be printed on the front, given the length of the book. 
If the book is n pages long, and a student wants to turn to page p, what is the minimum number of pages to turn? 
Given n and p , find and print the minimum number of pages that must be turned in order to arrive at page .
*/

/* Pseudo Code
Input is (total pages, pageNumber) = (5, 3)
Set a count var
Set a temp arr var
[0, 1] [2, 3] [4, 5]
iterate and return an array using index
iterate and slice chunks and push onto temp arr
We need to check if the array includes the page were looking for
if it doesn't, then it adds one to count
If the array has it, then start next search
Reverse array, and repeat prev steps
find the lesser value and return that number
Output is integer (amount of pages to pageNumber) = (1)
*/


let pageCount, test, pages, target, expected, actual, testCase
test = (a, e) => a === e ? 'passed!' : `Test Failed: Should've got ${e}, instead you got ${a}`

pageCount = (pages, target) => {
	let preBook = [...Array(pages + 1).keys()]

	let forwards = preBook.reduce((pageTurns, page) => {
			if (page <= target) {
				pageTurns++
			}
			return pageTurns
	}, 0) 

	let backwards = preBook.reverse().reduce((pageTurns, page) => {
		if (page >= target) {
			pageTurns++
		}
		return pageTurns
	}, 0) 
	



	let fastest = forwards <= backwards ? forwards: backwards
	console.log(fastest)
	if (pages % 2 === 1 && ) {
		return 0
	}
	return fastest / 2
}


//testCase 1
pages = 6, target = 2, expected = 1; actual = pageCount(pages, target); testCase = test(actual, expected)
console.log(`TestCase 1: ${testCase}`)

//testCase 2
pages = 5, target = 4, expected = 0; actual = pageCount(pages, target); testCase = test(actual, expected)
console.log(`TestCase 2: ${testCase}`)

//testCase 3
pages = 5, target = 3, expected = 2; actual = pageCount(pages, target); testCase = test(actual, expected)
console.log(`TestCase 3: ${testCase}`)






/* 
 let zero = false
let foundForward = false
let backwards = book.reduce((pageTurns, pages, i) => {
	console.log(i)
	if (pages.includes(target) && i === 0) {
		foundForward = true
		zero = true
		return pageTurns
	// } else if (!foundForward && i >= 1) {
		pageTurns++
	}
	return pageTurns
}, 0) 
 */



