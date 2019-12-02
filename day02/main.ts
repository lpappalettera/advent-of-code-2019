import getInput from '../lib/getInput'

function run(noun: number, verb: number){
    const input = getInput('../day02/input.txt').split(',').map(value => +value)

    var finished = false
    var i = 0

    input[1] = noun
    input[2] = verb

    while(!finished && i+3 < input.length) {
        const opcode = input[i]
        const a = input[i+1]
        const b = input[i+2]
        const c = input[i+3]

        switch(opcode) {
            case 1:
                input[c] = input[a] + input[b]
                break
            case 2: 
                input[c] = input[a] * input[b]
                break
            case 99:
                finished = true
                break
            default: 
                console.log("Something went wrong.")
                break  
        }
        i += 4
    }

    return input[0]
}

const outputPart1 = run(12, 2)
console.log(outputPart1)

var output = 0
var noun = 0
var verb = 0

for(noun =0; noun < 100; noun++) {
    for(verb = 0; verb < 100; verb++) {
        if(run(noun,verb) == 19690720)
            console.log((100 * noun + verb))
    }
}

