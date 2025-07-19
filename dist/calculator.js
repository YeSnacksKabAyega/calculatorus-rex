"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
function add(numbers) {
    // Return 0 for empty input
    if (numbers.length == 0)
        return 0;
    // Return the number for a single number
    if (numbers.split(/[\n,]/).length == 1)
        return parseInt(numbers);
    let delimiters = [',', '\n'];
    // Check for custom delimiters
    if (numbers.startsWith('//')) {
        let delimiter = numbers.substring(2, numbers.indexOf('\n'));
        if (delimiter.startsWith('[') && delimiter.endsWith(']')) {
            let delimits = delimiter.match(/\[([^\]]+)\]/g);
            delimits?.forEach((delimit) => delimiters.push(delimit.slice(1, -1)));
        }
        else
            delimiters.push(delimiter);
        numbers = numbers.substring(numbers.indexOf('\n') + 1);
    }
    // Build Regex pattern for all delimiters
    let regexOfDelimiters = new RegExp((delimiters.map(delimiter => delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'))).join('|'));
    let sum = 0;
    let exceptions = [];
    numbers.split(regexOfDelimiters).forEach((num) => {
        let parsedNum = parseInt(num);
        parsedNum >= 0 ?
            parsedNum > 1000 ?
                null
                :
                    sum += parsedNum
            :
                exceptions.push(num);
    });
    if (exceptions.length > 0)
        throw new Error('Negatives not allowed: ' + exceptions.join(', '));
    return sum;
}
// As instructed in the extended kata, I've skipped input validation.
