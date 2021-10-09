#!/usr/bin/env node

console.log(`
  | Week# | Book | Chapter# | Assignment | Date Completed | Grade | Points | Total |
  | ----- | ---- | -------- | ---------- | -------------- | ----- | ------ | ----- |
`)

// tableRaw = 
// 	headers
// 	join rows

const weekChapter = {
	5: [19,23],
	6: [24,28],
	7: [29,33],
	8: [34,38],
}

	// add(  )

const headers = ['Asset Name', 'Resource Type', 'Topic', 'Date Completed', 'Score']

const raw = require('./rows.js')

for ( let i = 0; i < raw.length; i++ ){

	console.log(i)
	for ( let j = 0; j< 5; j++ ){

		const row = []
		row.push(raw[j].trim())
		console.log(row)
	}
}

// 2 nested fors
	// iterate thru each in raw
	//

// console.log(0%5)

// const rows = raw => {
	
	const row = [ raw[0].trim(), raw[1].trim(), raw[2].trim(), raw[3].trim(), raw[4].trim(), ]

// }

console.log(headers)
console.log(row)

const rows = raw.length / 5
// for ( let ea of raw ){
// 	console.log(ea.indexOf%5)
// }


let response = []

// console.log(`
//   | ${}
// `)
