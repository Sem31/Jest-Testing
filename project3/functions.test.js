const { TestScheduler } = require('jest')
const func = require('./functions')
const axios = require('axios')
const dt = require('./jest.config')

// const initializeAll = () => console.log("Initialize All test")
// const closeAll = () => console.log("Close All test")
// const initialize = () => console.log("Initialize test")
// const close = () => console.log("Close test")

// beforeEach(() => initialize())
// afterEach(() => close())
// afterEach(() => {
//     jest.clearAllMocks();
//   });

// beforeAll(() => initializeAll())
// afterAll(() => closeAll())

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
    console.log(data)
    expect(data.name).toEqual('Luke Skywalker')

})

//mock test case
test("implement mock test", () => {
    const mock = jest.fn();
  
    let result = mock("foo");
    
    console.log(result)
    console.log(mock)
    expect(result).toBeUndefined();
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith("foo");
  });


  test("mock implementation", () => {
      //use arrow function insteat of using function
    const mock = jest.fn(() => "bar");
    
    console.log(mock("fooo"))
    expect(mock("foo")).toBe("bar");
    // expect(mock).toBe("bar");
    // console.log(mock)
    expect(mock).toHaveBeenCalledWith("foo");
  });
  
test("also mock implementation", () => {
    //use of mockImplementation to implement mock
    const mock = jest.fn().mockImplementation(() => "bar");
  
    expect(mock("foo")).toBe("bar");
    expect(mock).toHaveBeenCalledWith("foo");
});
  
test("mock implementation one time", () => {
    // use mockImplementationOnce to use mock function at once only
    const mock = jest.fn().mockImplementationOnce(() => "bar");
  
    expect(mock("foo")).toBe("bar");
    expect(mock).toHaveBeenCalledWith("foo");
  
    expect(mock("baz")).toBe(undefined);
    expect(mock).toHaveBeenCalledWith("baz");
});
  
test("mock return value", () => {
    const mock = jest.fn();
    // mock return value
    mock.mockReturnValue("bar");
    console.log(mock("foo"))
    expect(mock("foo")).toBe("bar");
    expect(mock).toHaveBeenCalledWith("foo");
});
  
test("mock promise resolution", () => {
    const mock = jest.fn();
    mock.mockResolvedValue("bar");
  
    expect(mock("foo")).resolves.toBe("bar");
    expect(mock).toHaveBeenCalledWith("foo");
});

//mock with function dependency

const doAdd = (a, b, callback) => {
    callback(a + b);
  };
  
test("functions call with add to no.", () => {
    const mockCallback = jest.fn();
    console.log(mockCallback)
    doAdd(1, 2, mockCallback);
    console.log(mockCallback)
    expect(mockCallback).toHaveBeenCalledWith(3);
});

test('user post name data in api', async () => {
    expect.assertions(2)
    const data = await func.postUser()
    console.log(data)
    console.log(data.status)
    expect(data.status).toEqual(201)
    expect(data.data.name).toEqual('sdf')
})
test('user put name data in api', async () => {
    expect.assertions(2)
    const data = await func.putUser()
    console.log(data)
    console.log(data.status)
    console.log(dt.data.name)
    expect(data.status).toEqual(200)
    expect(data.data.name).toEqual('sdf')


})

//mock api


// const getFirstAlbumTitle = require('./index');

// jest.mock('axios');

// it('returns the title of the first album', async () => {
//   axios.get.mockResolvedValue({
//     data: [
//       {
//         userId: 1,
//         id: 1,
//         title: 'My First Album'
//       },
//       {
//         userId: 1,
//         id: 2,
//         title: 'Album: The Sequel'
//       }
//     ]
//   });

//   const title = await getFirstAlbumTitle();
// //   console.log(title)
//   jest.restoreAllMocks()
//   expect(title).toEqual('My First Album');
  
// });

