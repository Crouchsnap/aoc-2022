const input = require("./input.js")

const sumScores = (lines) => 
    lines.split('\n')
    .reduce((acc, cur) => acc + ['B X', 'C Y', 'A Z', 'A X', 'B Y', 'C Z', 'C X', 'A Y', 'B Z' ].findIndex((element) => element === cur) + 1, 0)

const sumScoresPart2 = (lines) => 
    lines.split('\n')
    .reduce((acc, cur) => acc + ['B X', 'C X', 'A X', 'A Y' , 'B Y', 'C Y', 'C Z', 'A Z', 'B Z'].findIndex((element) => element === cur) + 1, 0)



describe("rock paper scissors scoring", () => {
   
    test("sum of scores", () => {
        expect(sumScores("A Y\nB X\nC Z")).toEqual(15)
    })

    test("sum of real scores", () => {
        expect(sumScores(input)).toEqual(13268)
    })

    test("sum of scores part 2", () => {
        expect(sumScoresPart2("A Y\nB X\nC Z")).toEqual(12)
    })

    test("sum of scores part 2", () => {
        expect(sumScoresPart2(input)).toEqual(15508)
    })
})