const { TestScheduler } = require('jest')
const func = require('./functions')


const initializeAll = () => console.log("Initialize All test")
const closeAll = () => console.log("Close All test")
const initialize = () => console.log("Initialize test")
const close = () => console.log("Close test")

beforeEach(() => initialize())
afterEach(() => close())

beforeAll(() => initializeAll())
afterAll(() => closeAll())

test('test 2 + 3 = 5', () => {
    expect(func.add(2,3)).toBe(5)
})
test('test 2 + 2 = 5 not', () => {
    expect(func.add(2,2)).not.toBe(5)
})

//toEqual
test('use toEqual for object toBe is only for numbers or strings', () => {

    expect(func.createUser()).toEqual({firstname:'sem', lastname : 'prajapat'})
})

//working with async data

//promise
test('user fetch name data from starwar api', () => {
    expect.assertions(1)
    return func.fetchUser()
            .then(data => {
                expect(data.name).toEqual('Luke Skywalker')
            })
})


//Async Await
test('user fetch name data from starwar api', async () => {
    expect.assertions(1)
    const data = await func.fetchUser()
    expect(data.name).toEqual('Luke Skywalker')

})