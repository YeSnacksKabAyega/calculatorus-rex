import readline from 'readline'
import { add } from './src/calculator'

let rl= readline.createInterface({ input: process.stdin, output: process.stdout })

console.log('\n\n\nWelcome to Calculatorus-Rex 🦖🦖🦖')
console.log('Get the sum of all numbers in a string.')
console.log('Accepted format: Numbers separated by default delimiters(, \\n) and custom delimiters that can be entered as: //<delimiter>\\n<input> or //[<delimiter>][<delimiter>]\\n<input>')
console.log('\n\nInput:\t')

rl.on('line', (input: string)=> {
  	try  {
    	let result= add(input)
    	console.log(`\nResult: ${result}`)
  	} 
	catch (err)	{
    	console.error(`\nError: ${(err as Error).message}`)
  	}

  console.log('\n\nEnter another input or press Ctrl+C to exit:\t')
})
