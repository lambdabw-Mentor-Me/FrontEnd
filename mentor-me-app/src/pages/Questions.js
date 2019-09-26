import React, { useEffect, useState } from "react";
import axios from "axios";

import QuestionContainer from "../components/QuestionContainer";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Questions = (props) => {
  const [questions, setQuestions] = useState([]);

  console.log("question state", questions);

  const questionId = questions.find(
    question => `${question.id}` === props.match.params.id
  );
  console.log(questionId);

  const fetchQuestions = () => {
    axiosWithAuth()
      .get(`/questions${questionId}`)
      .then(res => setQuestions(res.data))
      .catch(err => console.log(err));
  };
  console.log(questions)

  const handleSubmit = (question, id) => {
    axiosWithAuth()
      .post(`/questions/${question.id}`, question)
      .then(res => {
        fetchQuestions()
        console.log(alert('You have successfully submitted your form'))
      })
      .catch(err => console.log(err));
  };

  const handleUpdate = (question, id) => {
    axiosWithAuth()
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, question)
      .then(res => fetchQuestions())
      .catch(err => console.log(err));
  };

  const handleDelete = id => {
    axiosWithAuth()
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
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
