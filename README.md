Project Setup : 
    jest_project_setup

Installation instructions :
    npm i jest --save-dev
    npm i axios
    npm i jest-stare

Configuration instructions :  
    Configuration file is "jest.config.js" file

Setup Package.json File :
    "scripts": {
        "test": "jest",     #run all testcase
        "report": "jest --reporters default jest-stare",    #run all testcase with report file
        "testwatch": "jest --watchAll",     #watch all change in testcase or testfile and run all testcase
        "test:api": "jest --testNamePattern=ApiTest",   #run testcase with particular block
        "test:mock": "jest --testNamePattern=MockTest",
        "single": "jest -t 'user fetch name data from starwar apis'"    #run singel testcases
    },

Docker Run Command :
    # docker setup image 
    docker build -t JestProject:latest .
    #docker run image
    docker run JestProject:latest