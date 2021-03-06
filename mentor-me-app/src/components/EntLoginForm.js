import React, { useState,  } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import style from './LoginRegStyles'

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
            localStorage.setItem('id', JSON.stringify(res.data.id))

           props.history.push('/questions')
            console.log(res.id)
        })
        .catch(err => console.log(err.response))
    }

    return (
        <style.FormDiv>
        <h1>Entrepreneur Login</h1>
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
        </style.FormDiv>
    )
} 

export default EntLoginForm;