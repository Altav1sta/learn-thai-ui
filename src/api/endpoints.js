const axios = require('axios');
axios.defaults.baseURL = 'http://localhost:3001/api/'

export async function signIn(email, password) {
    try {
        const response = await axios.get(
            '/users',
            {
                params: { email, password }
            });
        return response.data.length === 0
            ? null
            : response.data[0];
    }
    catch (error) {
        console.error(error.message);
        return null;
    }
}

export async function signUp(firstName, lastName, email, password) {
    try {
        var response = await axios.post(
            '/users',
            {
                firstName,
                lastName,
                email,
                password
            });
        return response.data;
    }
    catch (error) {
        console.error(error.message);
        return null;
    }
}