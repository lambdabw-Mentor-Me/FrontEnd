import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FeedCard from "./FeedCard";
import styled from "styled-components"
import './Feed.scss';
const FeedBox = styled.div`
    
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100vw;
    margin: 0 auto;
`;


const Feed = (props) => {
    const [questions, setQuestions] = useState([])
    const [ents, setEnts] = useState([]);

    const entObject = (item) => {

        // * CHECKSUM, AWAIT TRY FIRST, THEN CATCH ERRORS FOR HANDLING.
        try {
            return ents.find(obj => obj.id === item.entrepreneur_id).email
        } catch {
            console.log('Loading data lag from backend, retrying return data.')
        }
    }

    useEffect(() => {
        axiosWithAuth().get("/ent/all")
            .then(res => {
                console.log("ents", res)
                setEnts(res.data)

            })
    }, [])

    useEffect(() => {

        axiosWithAuth().get('/questions')
            .then(res => {
                console.log('res =>', res.data, res);
                setQuestions(res.data);
                console.log(questions);
            })
            .catch(err => console.log(err.response))
    }, [])


    return (
        <FeedBox>

            {questions.map((question, key) => {
                console.log(ents, question)


                return <FeedCard
                    key={key}
                    id={entObject(question) && entObject(question)}
                    question={question.question}
                    title={question.title}

                />
            })}
        </FeedBox>

    )
}

export default Feed;