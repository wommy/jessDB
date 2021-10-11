#!/usr/bin/env node
const fs = require('fs')

const data = fs.readFileSync('./copypaste.txt', 'utf-8').split('\n')
let rows = []

for ( let i = 0; i < data.length; i+=5 ){
	rows.push([data[i],data[i+1],data[i+2],data[i+3],data[i+4]])
}

console.log(rows)

// for ( ea of data ){
// 	console.log(ea)
// }

// const rows = [ data[0], data[1], data[2], data[3], data[4] ]
// const cols = 5

// console.log(rows)