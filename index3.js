const fs = require('fs')
const data = fs.readFileSync('./11-27.txt', 'utf-8').split('\n')

let rows = []
let headers = 'week, book, chapter, assignment, date, grade, points, total'
rows.push(headers)
let total = 0

let weekChapter = {
	9: [39,40,41],
	10: [42,43,44,45],
	11: [46,47,48,49],
	12: [50,51,52],
	13: [53,54,55],
	14: [56,57,58,59],
}
let chapterWeek = {}
Object.keys( weekChapter ).forEach( 
	week => weekChapter[week].forEach(
		chapter => chapterWeek[chapter] = +week
	)
)

for ( let i = 5; i < data.length; i+=5 ){

	let chapter = +data[i+2].slice(8,10)
	let assignment = data[i+1]
	let points = {
		"PrepU Mastery Level Quizzes by Chapter": 1,
		"Pre-Lecture Quiz": .5,
	}[assignment] || .25

	rows.push([
		chapterWeek[chapter], // week
		'Karch', // book
		`Chapter ${chapter}`,
		assignment,
		`"${data[i+3].slice(0,12).trim()}"`, // date
		data[i+4], // grade
		points,
		total += points,
	].join(', '))
}

fs.writeFileSync( '11-29.csv', rows.join('\n'))
