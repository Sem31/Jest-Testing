const func = require('../src/api_functionality')
const axios = require('axios')
jest.mock('axios');

describe("(MockTest): API testcases", () => {
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
        expect(title.data[0].title).toEqual('My First Album one');
    })

    test('user put name data in api', async () => {
        // expect.assertions(2)
        axios.put.mockResolvedValue({
            data: [
              {
                userId: 12,
                id: 12,
                title: 'My First Album two'
              },
            ]
          });
          const title = await func.putUser();
          expect(title.data[0].title).toEqual('My First Album two');
    })

    test('user delete name data in api', async () => {
        axios.delete.mockResolvedValue({
            status : 404
          });
          const title = await func.deleteUser();
          console.log(title)
          expect(title.status).toEqual(404);
    })
  });