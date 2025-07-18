export function add(numbers: string): number {
    
    // Return 0 for empty input
    if (numbers.length== 0)
        return 0
    if (numbers.length== 1) 
        if (!isNaN(parseInt(numbers)))
            return parseInt(numbers)
    
    let sum: number= 0
    numbers.split(',').forEach((num: string)=>  sum+= parseInt(num))
    
    return sum
}