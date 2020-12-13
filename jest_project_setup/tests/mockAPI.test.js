// const { TestScheduler } = require('jest');
// const { credentials } = require('../jest.config');
const func = require('../src/api_functionality')
const axios = require('axios')
jest.mock('axios');

describe("API testcases", () => {
    // test stuff

    test('user get name data in api', async () => {
        axios.get.mockResolvedValue({
            data: [
              {
                userId: 1,
                id: 1,
                title: 'My First Album'
              },
              {
                userId: 1,
                id: 2,
                title: 'Album: The Sequel'
              }
            ]
          });
        
        const title = await func.getUser();
        expect(title[0].title).toEqual('My First Album');
    })

    test('user post name data in api', async () => {
        axios.post.mockResolvedValue({
            data: [
              {
                userId: 12,
                id: 12,
                title: 'My First Album one'
              },
            ]
          });
        
        const title = await func.postUser();
        console.log(title)
        expect(title.data[0].title).toEqual('My First Album one');
    })

    // test('user put name data in api', async () => {
    //     expect.assertions(2)
    //     const data = await func.putUser()
    //     expect(data.status).toEqual(200)
    //     expect(data.data.name).toEqual('kamlesh')
    // })

    // test('user delete name data in api', async () => {
    //     expect.assertions(1)
    //     const data = await func.deleteUser()
    //     expect(data.status).toEqual(204)
    // })
  });