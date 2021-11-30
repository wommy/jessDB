const fs = require('fs')

const data = fs.readFileSync('./11-27.txt', 'utf-8').split('\n')

let rows = []
// let total = [0]

// let headers = ['week', 'book', 'chapter', 'assignment', 'date', 'grade', 'points', 'total'].join(', ')
// rows.unshift(headers)

for ( let i = 5; i < data.length; i+=5 ){

	// let chapter = data[i+2].split(':').shift()
	// let week = +chapter.split(' ').pop()
	// let assignment = data[i+1]

	rows.push([
		data[i],
		data[i+1],
		data[i+2],
		`"${data[i+3].slice(0,12)}"`,
		data[i+4],
		// (
		// 	week < 42 && 9 
		// 	|| week < 46 && 10 
		// 	|| week < 50 && 11
		// 	|| week < 53 && 12
		// 	|| week < 56 && 13
		// 	|| week < 60 && 14
		// ).toString(),
		// 'Karch',
		// chapter,
		// assignment,
		// `"${data[i+3].split(' ', 3).join(' ')}"`,
		// data[i+4],
		// (
		// 	assignment.split(' ').shift() == 'PrepU' && '1'
		// 	|| assignment == 'Pre-Lecture Quiz' && '0.5'
		// 	|| '.25'
		// ),
		// (
		// 	assignment.split(' ').shift() == 'PrepU' && total.push(1)
		// 	|| assignment == 'Pre-Lecture Quiz' && total.push(0.5)
		// 	|| total.push(0.25)
		// ) && total.reduce( (p,c) => p + c),
	].join(', '))
}

fs.writeFileSync( '11-29-test.csv', rows.join('\n'))
