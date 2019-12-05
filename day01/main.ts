import getInput from '../lib/getInput'

const input = getInput('../../day01/input.txt')

let fuel = (mass: number) => { return Math.floor(mass / 3) - 2 }

const outputPart1 = input.split('\n').reduce((sum, value) => sum + fuel(+value), 0)
console.log(outputPart1)


let outputPart2 = 0
input.split('\n').forEach(function (value) {
    let fuelValue = fuel(+value)
    while(fuelValue > 0) {
        outputPart2 += fuelValue
        fuelValue = fuel(fuelValue)
    }
  }); 
console.log(outputPart2)
