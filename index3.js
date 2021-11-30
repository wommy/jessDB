const fs = require('fs')

const data = fs.readFileSync('./11-27.txt', 'utf-8').split('\n')

let rows = []

for ( let i = 0; i < data.length; i+=5 ){

	rows.push([
		data[i],
		data[i+1],
		data[i+2],
		data[i+3],
		data[i+4],
	].join(', '))
}

// let headers = ['week', 'book', 'chapter', 'assignment', 'date', 'grade', 'points', 'total'].join(', ')
// rows.unshift(headers)

fs.writeFileSync( '11-29.csv', rows.join('\n'))
