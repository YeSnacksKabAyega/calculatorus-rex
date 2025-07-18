export function add(numbers: string): number {
    
    // Return 0 for empty input
    if (numbers.length== 0)
        return 0

    // Return the number for a single number
    if (numbers.split(/[\n,]/).length== 1) 
        return parseInt(numbers)
    
    let delimiters: string[]= [',', '\n']
    // Check for custom delimiters
    if (numbers.startsWith('//'))   {
        delimiters.push(numbers.substring(2, numbers.indexOf('\n')))
        numbers= numbers.substring(numbers.indexOf('\n')+ 1)
    }
    // Build Regex pattern for all delimiters
    let regexOfDelimiters= new RegExp((delimiters.map(delimiter=> delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'))).join('|'))

    let sum: number= 0
    let exceptions: string[]= []
    numbers.split(regexOfDelimiters).forEach((num: string)=>  parseInt(num)>= 0 ? sum+= parseInt(num) : exceptions.push(num))
    if (exceptions.length> 0)
        throw new Error('Negatives not allowed: '+ exceptions.join(', '))
    
    return sum
}

// As instructed in the extended kata, I've skipped input validation.