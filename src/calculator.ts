export function add(numbers: string): number {
    
    // Return 0 for empty input
    if (numbers.length== 0)
        return 0

    // Return the number for a single number
    if (numbers.split(/[\n,]/).length== 1) 
        return parseInt(numbers)
    
    let sum: number= 0
    numbers.split(/[\n,]/).forEach((num: string)=>  sum+= parseInt(num))
    
    return sum
}

// As instructed in the extended kata, I've skipped input validation.