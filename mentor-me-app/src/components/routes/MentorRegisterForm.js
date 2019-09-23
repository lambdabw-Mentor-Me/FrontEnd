import React, { useState } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const MentorRegisterForm = () => {
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
            console.log(res)
            localStorage.setItem('token', JSON.stringify(res.data))

            user.props.history.push('/login')
            console.log(user)
        })
        .catch(err => console.log(err.response))
    }

    return (
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
          <button>Register</button>
        </form>
    )
} 

export default MentorRegisterForm;