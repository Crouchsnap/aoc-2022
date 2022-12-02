const input = require("./input.js")

const doIt = (input) => 
    input.split(`\n\n`)
    .map(group => group.split(`\n`))
    .map(group => group.reduce((acc, cur) => parseInt(acc) + parseInt(cur), 0))
    .sort((a, b) => b - a)
    [0]


const doItAgain = (input, numberToSum) => 
    input.split(`\n\n`)
    .map(group => group.split(`\n`))
    .map(group => group.reduce((acc, cur) => parseInt(acc) + parseInt(cur), 0))
    .sort((a, b) => b - a)
    .slice(0, numberToSum)
    .reduce((acc, cur) => acc+cur, 0)

const testInput = 
`00001\n00002\n\n00001\n00001\n00001\n00005`

describe("add up some numbers", () => {

    test("can split into groups", () => {
        expect(testInput.split(`\n\n`)).toEqual(
            [`00001\n00002`,
        `00001\n00001\n00001\n00005`])
    })

    test("can split group into numbers", () =>{
        expect(`00001\n00002`.split(`\n`)).toEqual(['00001','00002'])
    })

    test("can add up number strings", () => {
        expect(['00001','00002'].reduce((acc, cur) => parseInt(acc)+parseInt(cur), 0)).toEqual(3)
    })

    test("can sort sums", () => {
        expect([1, 3, 2].sort((a, b) => b - a)).toEqual([3, 2, 1])
    })

    test("can doIt", () => {
        expect(doIt(testInput)).toEqual(8)
    })

    test("can doIt for real", () => {
        expect(doIt(input)).toEqual(69836)
    })

    test("can doItAgain", () => {
        expect(doItAgain(testInput, 2)).toEqual(11)
    })

    test("can doItAgain for real", () => {
        expect(doItAgain(input, 3)).toEqual(207968)
    })
    
})