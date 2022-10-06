const axios = require('axios');
axios.defaults.baseURL = 'http://localhost:3001/api/'

export async function signIn(data) {
    try {
        const response = await axios.get('/users', {
            params: {
                email: data.email,
                password: data.password
            }
        });
        return response.data.length === 0 ? null : response.data[0].id;
    }
    catch (error) {
        console.log(error.message);
        return null;
    }
}