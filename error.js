#!/usr/bin/env node

const chalk = require('chalk') 
const sym = require('log-symbols')

module.exports = options => {
	const defaultOptions = {
		type: `error`,
		msg: `you messed up`,
		name: ``
	}
	const { type, msg, name } = { ...defaultOptions, ...options }
	const printName = name ? name : type.toUpperCase()

	type === `success` && console.log(`
	${sym.success} ${chalk.green(`${printName}`)} ${chalk.green(msg)}
`)

	type === `error` && console.log(`
	${sym.error} ${chalk.red(`${printName}`)} ${chalk.red(msg)}
`)

}
