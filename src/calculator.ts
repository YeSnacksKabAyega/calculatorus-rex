export function add(numbers: string): number {

    let delimiters: string[]= [',', '\n']   // Default delimiters
    // Check for custom delimiters
    if (numbers.startsWith('//'))   {
        let delimiter= numbers.substring(2, numbers.indexOf('\n'))
        if (delimiter.startsWith('[') && delimiter.endsWith(']'))   {
            let delimits= delimiter.match(/\[([^\]]+)\]/g)
            delimits?.forEach((delimit: string)=>   delimiters.push(delimit.slice(1, -1)))
        }
        else
            delimiters.push(delimiter)
        numbers= numbers.substring(numbers.indexOf('\n')+ 1)
    }
    // Build Regex pattern for all delimiters
    let regexOfDelimiters= new RegExp((delimiters.map(delimiter=> delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'))).join('|'))

    let sum: number= 0
    let exceptions: string[]= []
    numbers.split(regexOfDelimiters).forEach((num: string)=>  {
        let parsedNum= parseInt(num)
        parsedNum> 0 && parsedNum< 1001 ? 
                sum+= parsedNum 
            :
            Number.isInteger(parsedNum) && parsedNum< 0 ?
                exceptions.push(num)
                :
                null
    })
    if (exceptions.length> 0)
        throw new Error('Negatives not allowed: '+ exceptions.join(', '))
    
    return sum
}

// As instructed in the extended kata, I've skipped input validation.