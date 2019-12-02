"use strict";
exports.__esModule = true;
var getInput_1 = require("../lib/getInput");
function run(noun, verb) {
    var input = getInput_1["default"]('../day02/input.txt').split(',').map(function (value) { return +value; });
    var finished = false;
    var i = 0;
    input[1] = noun;
    input[2] = verb;
    while (!finished && i + 3 < input.length) {
        var opcode = input[i];
        var a = input[i + 1];
        var b = input[i + 2];
        var c = input[i + 3];
        switch (opcode) {
            case 1:
                input[c] = input[a] + input[b];
                break;
            case 2:
                input[c] = input[a] * input[b];
                break;
            case 99:
                finished = true;
                break;
            default:
                console.log("Something went wrong.");
                break;
        }
        i += 4;
    }
    return input[0];
}
var outputPart1 = run(12, 2);
console.log(outputPart1);
var output = 0;
var noun = 0;
var verb = 0;
for (noun = 0; noun < 100; noun++) {
    for (verb = 0; verb < 100; verb++) {
        if (run(noun, verb) == 19690720)
            console.log((100 * noun + verb));
    }
}
