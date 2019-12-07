import getInput from '../lib/getInput'

function run(runInput: number){
    const input = getInput('../../day05/input.txt').split(',').map(value => +value)

    let finished = false
    let outputs: number[] = [];
    let i = 0

    while(!finished && i+3 < input.length) {
        const instruction = input[i]
        const opcode = instruction % 100
        const param1 = instruction > 99 ? (instruction % 1000 - opcode) / 100 : 0
        const param2 = instruction > 999 ? (instruction % 10000 - (instruction % 1000)) / 1000 : 0
        const param3 = instruction > 9999 ? (instruction % 100000 - (instruction % 10000)) / 10000 : 0

        let value = (index: number, mode: number) => {
            switch(mode) {
                case 0: return input[index]
                case 1: return index
            }
        }

        const a = () => input[value(i+1, param1)]
        const b = () => input[value(i+2, param2)]

        switch(opcode) {
            case 1:
                input[value(i+3, param3)] = a() + b()
                i += 4
                break
            case 2: 
                input[value(i+3, param3)] = a() * b()
                i += 4
                break
            case 3:
                input[value(i+1, param1)] = runInput
                i += 2
                break
            case 4: 
                outputs.push(input[value(i+1, param1)])
                i += 2 
                break
            case 5:
                i = a() != 0 ? b() : i + 3
                break  
            case 6:
                i = a() == 0 ? b() : i + 3
                break
            case 7:
                input[value(i+3, param3)] = a() < b() ? 1 : 0
                i += 4
                break 
            case 8:
                input[value(i+3, param3)] = a() == b() ? 1 : 0
                i += 4
                break          
            case 99:
                finished = true
                break
            default: 
                console.log("Something went wrong.")
                break  
        }
        
    }

    return outputs
}

const outputPart1 = run(1)
console.log(outputPart1)

const outputPart2 = run(5)
console.log(outputPart2)
