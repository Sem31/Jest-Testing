const func = require('../src/api_functionality')

describe("(ApiTest): API testcases", () => {
    // test stuff
    test('user post name data in api', async () => {
        expect.assertions(1)
        const data = await func.getUser()
        expect(data.data[0].first_name).toEqual('Michael')
    })

    test('user post name data in api', async () => {
        expect.assertions(2)
        const data = await func.postUser()
        expect(data.status).toEqual(201)
        expect(data.data.name).toEqual('sdf')
    })

    test('user put name data in api', async () => {
        expect.assertions(2)
        const data = await func.putUser()
        expect(data.status).toEqual(200)
        expect(data.data.name).toEqual('kamlesh')
    })

    test('user delete name data in api', async () => {
        expect.assertions(1)
        const data = await func.deleteUser()
        expect(data.status).toEqual(204)
    })
  });