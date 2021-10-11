#!/usr/bin/env node
const fs = require('fs')

const data = fs.readFileSync('./copypaste.txt', 'utf-8')

console.log(data)
