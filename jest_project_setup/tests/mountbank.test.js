const axios = require('axios')
// import the mountebank helper library
const mbHelper = require('mountebank-helper');
 
// create the skeleton for the imposter (does not post to MB)
const firstImposter = new mbHelper.Imposter({ 'imposterPort' : 3000 });
 
// construct sample responses and conditions on which to send it
const sample_response = {
  'uri' : '/hello',
  'verb' : 'GET',
  'res' : {
    'statusCode': 200,
    'responseHeaders' : { 'Content-Type' : 'application/json' },
    'responseBody' : JSON.stringify({ 'hello' : 'world' })
  }
};
 
const another_response = {
  'uri' : '/pets/123',
  'verb' : 'PUT',
  'res' : {
    'statusCode': 200,
    'responseHeaders' : { 'Content-Type' : 'application/json' },
    'responseBody' : JSON.stringify({ 'somePetAttribute' : 'somePetValue' })
  }
};
// add our responses to our imposter
firstImposter.addRoute(sample_response);
firstImposter.addRoute(another_response);

// start the MB server  and post our Imposter to listen!

 

test('user get name data in api', async () => {
    await mbHelper.startMbServer(2525).then(function() {
        firstImposter.postToMountebank().then( () => {
        console.log('Imposter Posted! Go to http://localhost:3000/hello');
        });
        });
    // expect.assertions(1)
    const data = await axios.put("http://localhost:3000/pets/123").then(res => res.data)
    console.log(data)
    // expect(data.data[0].first_name).toEqual('Michael')
    
})
