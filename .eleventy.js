const path = require('path')
const fs = require('fs')
const cheerio = require('cheerio')

const markup = fs.readFileSync( path.join(__dirname, '../../public/jess-data1.html'), 'utf-8' )
const markup2 = fs.readFileSync( path.join(__dirname, '../../public/jess-data2.html'), 'utf-8' )

let rowsPre = {
  headers: ['assignment','resource_type','topic','date_completed','score'],
  content: [],
}

const $ = cheerio.load(markup, { xml: { normalizeWhitespace: true } }, false)
let items = []
$('.item').each( (i,el) => items.push( $(el).text().trim() ) )
for( let i = 0; i < items.length; i+=6 ){
  let schema = {
    assignment: items[i],
    resource_type: items[i+1],
    topic: items[i+2],
    due_date: items[i+3],
    date_completed: items[i+4],
    score: items[i+5],
  }
  if(schema.score === 'Complete'){ 
    rowsPre.content.push( schema )
   }
}

const $2 = cheerio.load(markup2, { xml: { normalizeWhitespace: true } }, false)
items = []
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
  05: [19,20],
  06: [21,22,23,24],
  07: [25,26,27,28],
  08: [29,30,31],
  09: [32,33,34,35],
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

  let schema = {
    week: chapterWeek[chapter],
    book: 'Norris',
    chapter: `Chapter ${chapter}`,
    assignment,
    date: e[rowsPre.headers[3]].slice(0,12).trim(),
    grade: e[rowsPre.headers[4]],
    points,
  }

  if( !schema.week ) return

  let schemaX = {
    ...schema,
    total: total += points,
  }

  rowsPost.content.push(schemaX)
})

module.exports = {
  rowsPre,
  rowsPost
}
