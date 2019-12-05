import getInput from '../lib/getInput'

type Coordinates = { x: number, y: number, distance: number }

function getCoordinates(instructions: string) {
    const coordinates: Coordinates[] = []
    instructions.split(',').forEach((item, index) => {
        const addCoordinates = (direction, distance) => {
            const position = coordinates.length == 0 ? { x: 0, y: 0, distance: 0} : coordinates[coordinates.length -1]
            if (distance > 0) {
                switch(direction) {
                    case 'U': 
                        coordinates.push({ x: position.x, y: position.y + 1, distance: position.distance+1})
                        break
                    case 'R': 
                        coordinates.push({ x: position.x + 1, y: position.y, distance: position.distance+1})
                        break
                    case 'D': 
                        coordinates.push({ x: position.x, y: position.y - 1, distance: position.distance+1 })
                        break
                    case 'L': 
                        coordinates.push({ x: position.x - 1, y: position.y, distance: position.distance+1 })
                        break   
                }
                addCoordinates(direction, distance -1)
            }
          }

        addCoordinates(item.substr(0, 1), +item.substr(1, item.length -1))  
    })
    return coordinates
}

const inputWires = getInput('../../day03/input.txt').split('\n')

const line1 = getCoordinates(inputWires[0])
const line2 = getCoordinates(inputWires[1])

const crossings = line1.filter( (item1) => line2.some(item2 => item1.x == item2.x && item1.y == item2.y))

//Output part 1
const closestCrossing = Math.min.apply(Math, crossings.map(function(o) { return Math.abs(o.x) + Math.abs(o.y); }))
console.log(closestCrossing)

//Output part 2
const shortestCrossing = Math.min.apply(Math, crossings.map(function(item1) { 
    return item1.distance + line2.find(item2 => item1.x == item2.x && item1.y == item2.y).distance 
}))
console.log(shortestCrossing)