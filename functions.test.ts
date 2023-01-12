

const {shuffleArray} = require('./utils')

describe('shuffleArray', () => {
    // CODE HERE
    test("Does it shuffle the items around", () => {
        expect(shuffleArray(["item1", "item2", "item3", "item4"]).sort()).toEqual(["item1", "item2", "item3", "item4"])
    })
    test("Does it return an array", () => {
        expect(shuffleArray(["item1", "item2", "item3"])).toEqual(expect.arrayContaining([expect.any(String)]))
    })
    })
