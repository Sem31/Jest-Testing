const axios = require('axios')

const functions = {
    add : (a,b) => a+b,
    createUser : () => {
        const user = { firstname : 'sem' }
        user['lastname'] = 'prajapat'
        return user
    },
    fetchUser : () => axios.get("https://swapi.dev/api/people/1/")
    .then(res => res.data)
    .catch(err => 'error')
};

module.exports = functions