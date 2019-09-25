import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://mentorme2019.herokuapp.com/api',
        headers: {
            Authorization: JSON.parse(token)
        }
    })
}