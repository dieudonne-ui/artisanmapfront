import axios from 'axios';

const API = 'https://artisanmap.onrender.com/api';

export const register = async (data) => {
return await axios.post(`${API}/users/register`, data);
};

export const login = async (data) => {
return await axios.post(`${API}/users/login`, data);
};

export const getProfile = async () => {
const token = localStorage.getItem('token');
return await axios.get(`${API}/users/profile`, {
headers: { Authorization: `Bearer ${token}` }
});
};