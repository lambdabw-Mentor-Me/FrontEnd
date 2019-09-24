import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FeedCard from "./FeedCard";


const Feed = (props) => {
    const [questions, setQuestions] = useState({})

    useEffect(() => {

        axiosWithAuth().get('/questions')
        .then(res => {
        console.log('res =>',res.data, res)
        setQuestions(res.data)
        })
        .catch(err => console.log(err.response))
    }, [])


    return (
        
        <FeedCard />
        
    )
} 

export default Feed;