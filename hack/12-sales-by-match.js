//Sales by Match\\
/*
There is a large pile of socks that must be paired by color. 
Given an array of integers representing the color of each sock, 
determine how many pairs of socks with matching colors there are.

Inputs = (7, [1,2,1,2,1,3,2]) || (9, [10,20,20,10,10,30,50,10,20])
	Sort array
	let curr num
	reduce array 
		if !currNUm === num add num
		 && currNum <= 2 && currNum[0] 
		 acc++
		 clear currNum
		 else {
			 clear currNum
			 set currNUm
		 }

Outputs = 2										|| 3
*/




const sockMerchant = (n, ar) => {
	let ph = 0
	return ar.sort().reduce((acc, curr) => {
			if (ph === 0) {
					ph = curr
			} else if ((ph === curr)) {
					acc++
					ph = 0
			} else if (ph !== curr) {
					ph = curr
			}
			return acc
	}, 0)
}

let assert = (a, e) => a === e ? 'Pass' : `Failed: Got ${a} instead of ${e}`


let input1 = assert(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]), 2)
let input2 = assert(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]), 3)

// console.log(input2)

// Method 2
let sockMerch = (n, ar) => {
	let unpaired = new Set()
	return ar.reduce((acc,sock) => {
		if(unpaired.has(sock)) {
			acc++
			unpaired.delete(sock)
		} else {
			unpaired.add(sock)
		}
		return acc
	}, 0)

}

console.log(sockMerch(7, [1, 2, 1, 2, 1, 3, 2]))