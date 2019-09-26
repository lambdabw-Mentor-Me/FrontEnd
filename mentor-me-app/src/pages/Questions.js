import React, { useEffect, useState } from "react";
import axios from "axios";

import QuestionContainer from "../components/QuestionContainer";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Questions = (props) => {
  const [questions, setQuestions] = useState([]);

  console.log("question state", questions);

//   const questionId = questions.find(
//     question => `${question.id}` === props.match.params.id
//   );
//   console.log(questionId);

  const fetchQuestions = () => {
    axiosWithAuth()
      .get(`/questions`)
      .then(res => {
        console.log('THIS IS THE QUESTIONS', res.data)
        setQuestions(res.data)
      })
      .catch(err => console.log(err));
  };
//   console.log(questions)

  const handleSubmit = () => {
    //   console.log(question)
    axiosWithAuth()
      .post(`/questions`, questions)
      .then(res => {
        fetchQuestions()
        console.log('THIS IS THE ENT ID', questions.entrepreneur_id)
      })
      .catch(err => console.log(err));
  };

  const handleUpdate = (question, id) => {
    axiosWithAuth()
      .put(`/questions/${id}`, question)
      .then(res => fetchQuestions())
      .catch(err => console.log(err));
  };

  const handleDelete = id => {
    axiosWithAuth()
      .delete(`questions/${id}`)
      .then(res => fetchQuestions())
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchQuestions();
  }, []);
  return (
    <div className="App">
      <QuestionContainer
        questions={questions}
        addQuestion={handleSubmit}
        updateQuestion={handleUpdate}
        deleteQuestion={handleDelete}
      />
    </div>
  );
}

export default Questions;
