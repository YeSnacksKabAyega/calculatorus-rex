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

    test ('Add two numbers', () =>   {

        let input= '6,9'
        let output= add(input)

        expect (output).toBe(6+ 9)
    })

    test ('Add more than two numbers', () =>   {

        let input= '6,9,4'
        let output= add(input)

        expect (output).toBe(6+ 9+ 4)
    })

    test ('Handle new lines (\n) as delimiters', () =>   {
        
        let input= '6,9\n4,2'
        let output= add(input)

        expect (output).toBe(6+ 9+ 4+ 2)
    })

    test ('Support different delimiters', () =>   {

        let input= '//;\n90;09'
        let output= add(input)

        expect (output).toBe(90+ 9)
    })

    test ('Throw exception if negative numbers are found', () =>   {

        let input= '//;\n90;09\n-9,-99'
        let output= add(input)

        expect (output).toThrow('Negatives not allowed: -9, -99')
    })

})