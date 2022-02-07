const path = require('path')
const fs = require('fs')
const cheerio = require('cheerio')

const markup = fs.readFileSync( path.join(__dirname, '../../public/CoursePoint.html'), 'utf-8' )
const markup2 = fs.readFileSync( path.join(__dirname, '../../public/CoursePoint2.html'), 'utf-8' )

let rowsPre = {
  headers: ['assignment','resource_type','topic','date_completed','score'],
  content: [],
}

const $ = cheerio.load(markup, { xml: { normalizeWhitespace: true } }, false)
$('table tbody tr td:nth-child(1)').each( (index, element) => {
  const assignment = $(element).text()
  const resource_type = $(element).next().text()
  const topic = $(element).next().next().text()
  const date_completed = $(element).next().next().next().next().text()
  const score = $(element).next().next().next().next().next().text()
  if( score !== 'Complete' ){ return }
  rowsPre.content.push({
    assignment,
    resource_type,
    topic,
    date_completed,
    score,
  })
})

const $2 = cheerio.load(markup2, { xml: { normalizeWhitespace: true } }, false)
let items = []
$2('.item').each( (i,el) => items.push( $2(el).text().trim() ) )
for( let i = 0; i < items.length; i+=5 ){
  let schema = {
    assignment: items[i],
    resource_type: items[i+1],
    topic: items[i+2],
    date_completed: items[i+3],
    score: items[i+4],
  }
  rowsPre.content.push( schema )
}

let rowsPost = {
  headers: ['week','book','chapter','assignment','date','grade','points','total'],
  content: [],
}

let total = 0
const weekChapter = {
  01: [01,02,03,04],
  02: [05,06,07,08],
  03: [09,10,11,12],
  04: [13,14,15,16],
  05: [17,18],
}
let chapterWeek = {}
Object.keys( weekChapter ).forEach( 
	week => weekChapter[week].forEach(
		chapter => chapterWeek[chapter] = +week
	)
)

rowsPre.content.map( e => {
  let chapter = +e[rowsPre.headers[2]].slice(8,10)
	let assignment = e[rowsPre.headers[1]]
	let points = {
		"PrepU Mastery Level Quizzes by Chapter": 1,
		"Pre-Lecture Quiz": .5,
	}[assignment] || .25

  rowsPost.content.push({
    week: chapterWeek[chapter],
    book: 'karch',
    chapter: `Chapter ${chapter}`,
    assignment,
    date: e[rowsPre.headers[3]].slice(0,12).trim(),
    grade: e[rowsPre.headers[4]],
    points,
    total: total += points,
  })
})

module.exports = {
  rowsPre,
  rowsPost
}
