import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FeedCard from "./FeedCard";
import styled from "styled-components"

const FeedBox = styled.div`
    
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100vw;
`;



const Feed = (props) => {
    const [questions, setQuestions] = useState([])

    useEffect(() => {

        axiosWithAuth().get('/questions')
        .then(res => {
        console.log('res =>',res.data, res);
        setQuestions(res.data);
        console.log(questions);
        })
        .catch(err => console.log(err.response))
    }, [])


    return (
        <FeedBox>
            {questions.map(question => 
        
        <FeedCard
          key={question.id}
          id={question.id}
          question={question.question}
          title={question.title}

        />   


      //name, type, dimension, residents
    )
    }
        </FeedBox>
        
    )
} 

export default Feed;