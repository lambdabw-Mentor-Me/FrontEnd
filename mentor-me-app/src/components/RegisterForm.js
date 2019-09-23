import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const RegisterForm = () => {
    const [user, setUser] = useState({
        credentials: {
            email: '',
            password: ''
        }
    })

    const handleChange = e => {
        setUser({
            credentials: {
                ...user.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    const register = e => {
        e.preventDefault();

        axiosWithAuth().post('/ent/register', user.credentials)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err.response))
    }

    return (
        <form onSubmit={register}>
          <input
            type="email"
            name="username"
            value={user.credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={user.credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
    )
} 

export default RegisterForm;