import { add } from '../src/calculator'

// As instructed in the extended kata, I've skipped tests for invalid inputs. 

describe ('String calculator', () =>    {
    
    test ('Return 0 for empty string', () =>   {
        let input= ''
        let output= add(input)
        expect (output).toBe(0)
    })

    test ('Returns the number for a single number', () =>   {
        let input= '6'
        let output= add(input)
        expect (output).toBe(parseInt(input))
    })
})