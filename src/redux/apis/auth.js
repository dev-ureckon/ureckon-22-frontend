import axios from 'axios';

const url = ""

const config = {
    headers: {
        'Content-Type': 'application/json',
    },
};

export const loginUser = (email, password) =>
    axios.post(`${url}/login`, { email, password }, config);

export const registerUser = (name, email, password) =>
    axios.post(`${url}/register`, { name, email, password }, config);
