import React, { useEffect, useState } from "react";
import axios from "axios";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const Questions = (props) => {
  const [title, setTitle] = useState('')
  const [question, setQuestion] = useState('')
  const [business_type, setBusiness_type] = useState('')
  const [questions, setQuestions] = useState([{
    title: '',
    question: '',
    business_type: '',
    entrepreneur_id: null
  }]);

  const getQuestions = () => {
    axiosWithAuth()
      .get("/questions")
      .then(res => {
        console.log(res.data);
        setQuestions(res.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getQuestions();
  }, [questions]);

  const postQuestion = (newQuestion) => {
    axiosWithAuth().post('/questions', newQuestion)
    .then(res => {
      console.log('post post post question', res.data)
      setQuestions([{
        ...questions,
        ...res.data
      }])
    })
    .catch(err => console.log('posting question error', err.response))
  } 

  const handleChange = e => {
    setQuestions([{
      ...questions,
      [e.target.name]: e.target.value
    }])
  }

  return (
    <>
    <form onSubmit={(e) => {
      e.preventDefault();
      const newQuestion = {title, question, business_type}
      postQuestion(newQuestion)
      }}>
      <input 
        type='text'
        name='title'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input 
        type='text'
        name='title'
        value={question}
        onChange={e => setQuestion(e.target.value)}
      />
      <input 
        type='text'
        name='title'
        value={business_type}
        onChange={e => setBusiness_type(e.target.value)}
      />
      <button type='submit'>Submit</button>
    </form>
    <div >
     {questions.map((question, i) => {
       return (
         <div key={i}>
         <h1>{question.title}</h1>
         <h2>{question.question}</h2>
         <h1>{question.business_type}</h1>
         </div>
       )
     })}
    </div>
    </>
  );
}

export default Questions;
