"use strict";
exports.__esModule = true;
var getInput_1 = require("../lib/getInput");
var input = getInput_1["default"]('../day01/input.txt');
var fuel = function (mass) { return Math.floor(mass / 3) - 2; };
var outputPart1 = 0;
input.split('\n').forEach(function (value) {
    outputPart1 += fuel(+value);
});
console.log(outputPart1);
var outputPart2 = 0;
input.split('\n').forEach(function (value) {
    var fuelValue = fuel(+value);
    while (fuelValue > 0) {
        outputPart2 += fuelValue;
        fuelValue = fuel(fuelValue);
    }
});
console.log(outputPart2);
