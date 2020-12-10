const filterByTerm = require("../src/filterByTerm");
// function filterByTerm(inputArr, searchTerm) {
//     return inputArr.filter(function(arrayElement) {
//       return arrayElement.url.match(searchTerm);
//     });
// }

//use regex to get Uppercse and lowercase identification
// function filterByTerm(inputArr, searchTerm) {
//     const regex = new RegExp(searchTerm, "i");
//     return inputArr.filter(function(arrayElement) {
//       return arrayElement.url.match(regex);
//     });
// }

describe("this function contain one or more testcases", () => {
    // test stuff
    test("it should filter by a search term (link)", () => {
        // actual test
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];
        const output = [{ id: 3, url: "https://www.link3.dev" }];

        //write actuall test assertions
        expect(filterByTerm(input, "link")).toEqual(output);
      });
      test("it should filter by a search term (Link)", () => {
        // actual test
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];
        const output = [{ id: 3, url: "https://www.link3.dev" }];

        //write actuall test assertions
        expect(filterByTerm(input, "LINK")).toEqual(output); // New test
      });
  });