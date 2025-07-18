import { add } from '../src/calculator'

// As instructed in the extended kata, I've skipped tests for invalid inputs. 

describe ('String calculator', () =>    {
    test ('Returns 0 for empty string', () =>   {
        let input= ''
        let output= add(input)
        expect (output).toBe(0)
    })
})