let negative, zero, positive, length, findRatio, ratio
function plusMinus(arr) {
	negative = zero = positive = 0
	length = arr.length

	arr.map(num => {
		switch (Math.sign((num))) {
			case 1:
				positive++
				break;
			case 0:
				zero++
				break;
			case -1:
				negative++
				break;
			default:
				break;
		}
	})

	findRatio = (number, length) => {
		return ratio = (number / length).toFixed(6)
	}
	console.log(
		findRatio(positive, length) + '\n' +
		findRatio(negative, length) + '\n' + 
		findRatio(zero, length) 
	)
	negative = zero = positive = 0
}

const array = [-4, 3, -9, 0, 4, 1]
const results = plusMinus(array)

// Input  = Array of numbers
// declare positive, zero, and negative and assign to zero
// iterate through array and add to count depending on integer value
// divide the variables for the length 
// split after 6th index
// Output = MultiLine of the ratio of duplicates to numbers.length  to the 6th decimal (log)