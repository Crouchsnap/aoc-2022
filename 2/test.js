const input = require("./input.js")

const sumScore = (lines) => lines.split('\n').reduce((acc, cur) => acc + lineScore(cur), 0)

const lineScore = (line) =>  shapeScore(line[2]) + matchScore(line)

const shapeScore = (shape) => {
     switch (shape) {
        case 'X' : return 1
        case 'Y' : return 2
        case 'Z' : return 3
        default : return 0
    }
}

const matchScore = (match) => {
    switch (match[0]){
        case 'A' : return opponentPlaysRock(match[2])
        case 'B' : return opponentPlaysPaper(match[2])
        case 'C' : return opponentPlaysScissors(match[2])
    }
}

const opponentPlaysRock = (yourPlay) => {
    switch (yourPlay) {
        case 'X' : return 3
        case 'Y' : return 6
        case 'Z' : return 0
    }
}

const opponentPlaysPaper = (yourPlay) => {
    switch (yourPlay) {
        case 'X' : return 0
        case 'Y' : return 3
        case 'Z' : return 6
    }
}
const opponentPlaysScissors = (yourPlay) => {
    switch (yourPlay) {
        case 'X' : return 6
        case 'Y' : return 0
        case 'Z' : return 3
    }
}


describe("rock paper scissors scoring", () => {
    test("shape score", () => {
        expect(shapeScore('X')).toEqual(1)
        expect(shapeScore('Y')).toEqual(2)
        expect(shapeScore('Z')).toEqual(3)
    })
    test("match score", () => {
        expect(matchScore("A X")).toEqual(3)
        expect(matchScore("A Y")).toEqual(6)
        expect(matchScore("A Z")).toEqual(0)
        expect(matchScore("B X")).toEqual(0)
        expect(matchScore("B Y")).toEqual(3)
        expect(matchScore("B Z")).toEqual(6)
        expect(matchScore("C X")).toEqual(6)
        expect(matchScore("C Y")).toEqual(0)
        expect(matchScore("C Z")).toEqual(3)
    })
    test("line score", () => {
        expect(lineScore("A Y")).toEqual(8)
        expect(lineScore("B X")).toEqual(1)
        expect(lineScore("C Z")).toEqual(6)
    })
    test("sum of scores", () => {
        expect(sumScore("A Y\nB X\nC Z")).toEqual(15)
    })

    test("sum of real scores", () => {
        expect(sumScore(input)).toEqual(13268)
    })
})