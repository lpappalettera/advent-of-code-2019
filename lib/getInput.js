"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
function getInput(inputFile) {
    var inputPath = path.join(__dirname, inputFile);
    var inputString = fs.readFileSync(inputPath, 'utf8');
    return inputString;
}
exports["default"] = getInput;
