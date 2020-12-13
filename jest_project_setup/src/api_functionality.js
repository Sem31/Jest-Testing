const axios = require('axios')
// const fetch = require('node-fetch');
const { credentials } = require('../jest.config');



const apiCalling = {
    // get : () => fetch(credentials.url + credentials.endpoint.get).then(res => res.text()),
    getUser : () => axios.get(credentials.url + credentials.endpoint.get).then(res => res.data).catch(err => 'error'),
    postUser  : () => axios.post(credentials.url + credentials.endpoint.post,
                                        {
                                            "name": "sdf",
                                            "job": "fasf"   }),
    putUser : () => axios.put(credentials.url + credentials.endpoint.put,
                                        {
                                            "name": "kamlesh",
                                            "job": "fasf"   }),
    deleteUser : () => axios.delete(credentials.url + credentials.endpoint.delete)
};

module.exports = apiCalling