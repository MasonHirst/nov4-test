const {shuffleArray} = require('./utils')
const {bots} = require('./data')

// console.log(bots)
// console.log('---------------------')
// console.log(shuffleArray(bots))

describe('shuffleArray should', () => {
    test('shuffleArray function returns an array of the same length as original', () => {
        expect((shuffleArray(bots)).length).toBe(bots.length)
    })

    // the following test will fail about 1/10 times, so if it fails just run it again
    test('shuffleArray function should change the order of the array', () => {
        expect((shuffleArray(bots))[2]).not.toBe(bots[2]) 
    })
})
