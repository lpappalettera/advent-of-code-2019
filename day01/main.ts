import getInput from '../lib/getInput'

const input = getInput('../day01/input.txt')

let fuel = (mass: number) => { return Math.floor(mass / 3) - 2 }

var outputPart1 = 0
input.split('\n').forEach(function (value) {
    outputPart1 += fuel(+value)
  }); 
console.log(outputPart1)


var outputPart2 = 0
input.split('\n').forEach(function (value) {
    var fuelValue = fuel(+value)
    while(fuelValue > 0) {
        outputPart2 += fuelValue
        fuelValue = fuel(fuelValue)
    }
  }); 
console.log(outputPart2)
