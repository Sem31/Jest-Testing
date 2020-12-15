module.exports = {
    credentials : {
        url : "https://reqres.in/",
        endpoint : {
            get : "api/users?page=2",
            post : "api/users",
            put : "api/users/2",
            delete : "api/users/2"
        }
    },
    setupFilesAfterEnv: [
        "./src/setup.js",
    ],
    testEnvironment: "node",
    reporters: [
        "default",
        [
          "jest-stare",
          {
            "resultDir": "results/jest-stare",
            "reportTitle": "jest-stare!",
            "additionalResultsProcessors": [
              "jest-junit"
            ],
            "coverageLink": "../../coverage/lcov-report/index.html",
            "jestStareConfigJson": "jest-stare.json",
            "jestGlobalConfigJson": "globalStuff.json"
          }
        ]
      ]
}
