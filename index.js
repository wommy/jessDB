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

const row = [
	[ raw[0], raw[1], raw[2], raw[3], raw[4], ],
]
// for ( let ea of rows ){
// 	console.log(``)
// }

console.log(row)


let response = []

// console.log(`
//   | ${}
// `)
