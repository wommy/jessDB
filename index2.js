#!/usr/bin/env node
const fs = require('fs')

const data = fs.readFileSync('./copypaste.txt', 'utf-8').split('\n')
let rows = []
let total = [0]

for ( let i = 5; i < data.length; i+=5 ){

	let chapter = data[i+2].split(':').shift()
	let week = +chapter.split(' ').pop()
	let assignment = data[i+1]

	rows.push([
		(week < 24 && 5 || week < 29 && 6 || week < 34 && 7 || week < 39 && 8 || '-').toString(),
		'Karch',
		chapter,
		assignment,
		`"${data[i+3].split(' ', 3).join(' ')}"`,
		data[i+4],
		(
			assignment.split(' ').shift() == 'PrepU' && '1'
			|| assignment == 'Pre-Lecture Quiz' && '0.5'
			|| assignment === '-' && '0'
			|| '.25'
		),
		(
			assignment.split(' ').shift() == 'PrepU' && total.push(1)
			|| assignment == 'Pre-Lecture Quiz' && total.push(0.5)
			|| assignment === '-' && total.push(0)
			|| total.push(0.25)
		) && total.reduce( (p,c) => p + c),
			
	].join(', '))
}

let headers = ['week', 'book', 'chapter', 'assignment', 'date', 'grade', 'points', 'total'].join(', ')
rows.unshift(headers)

// console.log(rows)

fs.writeFileSync( 'jessDB.csv', rows.join('\n'))

// for ( ea of data ){
// 	console.log(ea)
// }

// const rows = [ data[0], data[1], data[2], data[3], data[4] ]
// const cols = 5

// console.log(rows)