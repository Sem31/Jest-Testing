const { TestScheduler } = require('jest')
const reverseString = require('./reverseString')

test('check resverse string exits or not', () => {
    expect(reverseString).toBeDefined()
})

test('string resverses', () => {
    expect(reverseString('hello')).toEqual('olleh')
}) 

test('string resverses with upper case', () => {
    expect(reverseString('Hello')).toEqual('olleh')
}) 