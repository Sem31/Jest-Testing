# Project Setup : 
```JavaScript
    jest_project_setup
```

# Installation instructions :
```JavaScript
    npm i jest --save-dev
    npm i axios
    npm i jest-stare
```

# Configuration File : 
```JavaScript 
    Configuration file is "jest.config.js" file
```

# Setup Package.json File :
```JavaScript
    "scripts": {
        // Run all testcase
        "test": "jest",     
        // Run all testcase with report file
        "report": "jest --reporters default jest-stare",    
        // Watch all change in testcase or testfile and run all testcase
        "testwatch": "jest --watchAll",     
        // Run testcase with particular block
        "test:api": "jest --testNamePattern=ApiTest",   
        "test:mock": "jest --testNamePattern=MockTest",
        // Run singel test case
        "single": "jest -t 'user fetch name data from starwar apis'"    
    }
```

# Docker Run Command :
```JavaScript
    // docker setup image 
    docker build -t JestProject:latest .
```
```JavaScript
    // docker run image
    docker run JestProject:latest
```