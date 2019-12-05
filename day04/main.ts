import getInput from '../lib/getInput'

const input = getInput('../../day04/input.txt').split('-')
const start = +input[0]
const end = +input[1]

const range = (start, end) => Array.from({length: (end - start)}, (v, k) => k + start);

const isValid = (password: number, validAdjacentNumber: (number) => Boolean) => {
    let adjacentDigits = 1
    let increasingNumbers = true
    let containsAdjacentNumbers = false
    const digits = password.toString().split('')
    
    let lastDigit: number = +digits.shift()
    for(let s of digits) {
        const c = +s
        if(lastDigit > +c) {
            increasingNumbers = false
            break;
        } else if(lastDigit == +c) {
            adjacentDigits++ 
        } else {
            if(validAdjacentNumber(adjacentDigits))
                containsAdjacentNumbers = true 

            adjacentDigits = 1
        }
        lastDigit = +c
    }
    if(validAdjacentNumber(adjacentDigits))
        containsAdjacentNumbers = true 

    return increasingNumbers && containsAdjacentNumbers
} 

const validAnswersPart1 = range(start, end).filter( password => isValid(password, d => d >= 2))
console.log(validAnswersPart1.length)

const validAnswersPart2 = range(start, end).filter( password => isValid(password, d => d == 2))
console.log(validAnswersPart2.length)