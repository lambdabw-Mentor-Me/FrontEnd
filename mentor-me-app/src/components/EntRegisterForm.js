import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { NavLink } from 'react-router-dom';
import style from './LoginRegStyles'

const EntRegisterForm = (props) => {
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

    const register = e => {
        e.preventDefault();

        axiosWithAuth().post('/ent/register', user.credentials)
        .then(res => {
            console.log(res.data)

            props.history.push('/ent-login')

            localStorage.setItem('token', JSON.parse(res.data.token))
            localStorage.setItem('user', JSON.stringify(res.data.user))

            console.log(user)
        })
        .catch(err => console.log(err.response))
    }

    return (
        <style.FormDiv>
        <h1>Entrepreneur Register</h1>
        <form onSubmit={register}>
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
          <button type='submit'>Register</button>
        </form>
        <h3>Already have an account? <NavLink to='/ent-login'>Login</NavLink></h3>
        </style.FormDiv>
    )
} 

export default EntRegisterForm;