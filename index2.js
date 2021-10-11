#!/usr/bin/env node
const fs = require('fs')

const data = fs.readFileSync('./copypaste.txt', 'utf-8').split('\n')
// console.log(data)

for ( ea of data ){
	console.log(ea)
}

// const rows = [ data[0], data[1], data[2], data[3], data[4] ]
// const cols = 5

// console.log(rows)