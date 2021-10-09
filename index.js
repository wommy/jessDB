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

const row = [ raw[0].trim(), raw[1].trim(), raw[2].trim(), raw[3].trim(), raw[4].trim(), ]
// for ( let ea of rows ){
// 	console.log(``)
// }

console.log(headers)
console.log(row)


let response = []

// console.log(`
//   | ${}
// `)
