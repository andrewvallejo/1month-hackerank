// 03 Time Conversion 
/* Given a time in -hour AM/PM format, convert it to military (24-hour) time.
	// 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock
	// 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
		s = '12:01:00PM => '12:01:00'.
		s = '12:01:00AM => '00:01:00'.

Input: string s: a time in  hour format // 07:05:45PM \\
Split the string after the first number
Split the string in the middle
Split the string after the last number
	if AM return (string - AM)
	if PM return (string + 12)
		Turn string into a number 
		Add 12 to number
		Turn number into string
		Concat string with remainder of split 
		return string
Output: string: the time in  hour format // 19:05:45 \\

*/

const time = "12:45:54PM"


const timeConversion = (s) => {
	let [hours, minutes, seconds] = s.split(':')
	let daytime = seconds.substring(2)
	seconds = seconds.substring(0,2)
	hours =	parseInt(hours)
	if (daytime === 'AM' && hours === 12) hours = '00'
	if (daytime === 'PM' && hours < 12) hours = hours + 12
	if (hours >= 24) hours = '00'
	if (hours < 10 && hours !== '00') hours = '0' + hours
	return [hours, minutes, seconds].join(':')
}

const convertTime = (t) => {

	return s
}

	
	const results = timeConversion(time)
	console.log(results)
	
	


// const timeConversion = (s) => {
// 	// if(s === '12:00:00AM') return '00:00:00'
// 	// if(s === '12:00:00PM') return '12:00:00'
// 	// let afternoon, hour, mins, secs, fixTime
// 	// [hour, mins, secs] = s.split(':')
// 	// afternoon = false;
// 	// secs.replace(/(AM|PM)/, '')
// 	// if (afternoon) (hour = parseInt(hour) + 12).toString()
// 	// fixTime = [hour, mins, secs[0]].join(':')
// 	// return fixTime
// }

// // function timeConversion(s) {
//     let hours = parseInt(s.substr(0, 2));
//     if (s.indexOf('AM') != -1 && hours == 12) {
//         s = s.replace('12', '00');
//     }

//     if (s.indexOf('PM') != -1 && hours < 12) {
//         if (s.substr(0, 1) === '0') {
//             s = s.replace('0', '');
//             s = s.replace(hours, (hours + 12));
//         } else {
//             s = s.replace(hours, (hours + 12));
//         }
//     }

//     return s.replace(/(AM|PM)/, '');
// }