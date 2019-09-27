import React, { useEffect, useState } from "react";

import QuestionContainer from "../components/Questions/QuestionContainer";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Questions = (props) => {
  const [questions, setQuestions] = useState([]);

  // * useState for actively displaying form
  const [active, setActive] = useState({ display: false });

  const activate = (e) => {
    e.preventDefault();

    // ? CHECK FOR BOOLEAN VALUE
    const displayFalse = active.display === false
    const displayTrue = active.display === true

    // ? SET DATA AMONGST BOOLEAN FOR NEWEST STATE
    if (displayFalse) {
      return setActive({
        ...active,
        ...{ display: true }
      })
    } else if (displayTrue) {
      return setActive({
        ...active,
        ...{ display: false }
      })
    }
  };

  console.log("question state", questions);

  const fetchQuestions = () => {
    axiosWithAuth()
      .get(`/questions`)
      .then(res => {
        console.log('THIS IS THE QUESTIONS', res.data)
        setQuestions(res.data)
      })
      .catch(err => console.log(err));
  };

  const handleSubmit = () => {
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
    <div>

      {/* // * TEST BTN FOR DYNAMIC CLASS CHANGE (TEMPORARY BTN)
       */}
      <button
        className={active.display === true ? 'active' : 'false'}
        onClick={(e) => activate(e)}>
        Display
      </button>

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
