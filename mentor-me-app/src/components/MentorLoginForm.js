import React, { useState,  } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const EntLoginForm = (props) => {

    const [user, setUser] = useState({
        credentials: {
            email: '',
            password: '',
        }
    })

    const handleChange = e => {
        setUser({
            credentials: {
                ...user.credentials,
                [e.target.name]: e.target.value
            }
        })
        console.log(user.credentials)
    }

    const login = e => {
        e.preventDefault();

        axiosWithAuth().post('/ent/login', user.credentials)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', JSON.stringify(res.data.token))
            localStorage.setItem('user', JSON.stringify(user.credentials))

            EntLoginForm.user.props.history.push('/questions')
            console.log(user)
        })
        .catch(err => console.log(err.response))
    }

    return (
        <>
        <h1>Mentor Login</h1>
        <form onSubmit={login}>
          <input
            type="email"
            name="email"
            placeholder='Email'
            value={user.credentials.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder='Password'
            value={user.credentials.password}
            onChange={handleChange}
          />
          <button type='submit'>Log in</button>
        </form>
        </>
    )
} 

export default EntLoginForm;