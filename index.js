#!/usr/bin/env node

console.log(`
  | Week# | Book | Chapter# | Assignment | Date Completed | Grade | Points | Total |
  |-|-|-|-|-|-|-|-|
`)

let topic = 'Chapter 34: Introduction to the Endocrine System'

console.log()
console.log(topic.slice(8,10))
console.log()

// Chapter 


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
console.log(headers)

const raw = require('./rows.js')

const rows = []
console.log(`  | ${headers[0]} | ${headers[1]} | ${headers[2]} | ${headers[3]} | ${headers[4]} |`)
for ( let i = 0; i < raw.length/5; i++ ){

	// console.log(i)
	let row = []
	for ( let j = 0; j< 5; j++ ){
		let offset = i*5
		
		if ( j == 2 ) { row.push( raw[`${j+offset}`].slice(8,2) ) }

		row.push(raw[`${j+offset}`].trim())
	}
	rows.push(row)
	console.log(`  | ${row[0]} | ${row[1]} | ${row[2]} | ${row[3]} | ${row[4]} |`)
}



// 2 nested fors
	// iterate thru each in raw
	//

// console.log(0%5)

// const rows = raw => {
	
	// const row = [ raw[0].trim(), raw[1].trim(), raw[2].trim(), raw[3].trim(), raw[4].trim(), ]

// }

// console.log(row)

// const rows = raw.length / 5
// for ( let ea of raw ){
// 	console.log(ea.indexOf%5)
// }


let response = []

// console.log(`
//   | ${}
// `)
