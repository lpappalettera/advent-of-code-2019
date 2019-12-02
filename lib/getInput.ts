import * as fs from 'fs';
import * as path from 'path';

function getInput(inputFile: string): string {
    const inputPath = path.join(__dirname, inputFile);
    const inputString = fs.readFileSync(inputPath, 'utf8');
    return inputString;
}

export default getInput;