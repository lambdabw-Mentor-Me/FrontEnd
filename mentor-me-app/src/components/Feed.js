import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FeedCard from "./FeedCard";
import styled from "styled-components"

const FeedBox = styled.div`
    
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    width:100%;
`;



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
        <FeedBox>
            <FeedCard />
            <FeedCard />
            <FeedCard />
        </FeedBox>
        
    )
} 

export default Feed;