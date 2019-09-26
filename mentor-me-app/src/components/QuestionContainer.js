import React, { useState } from "react";
import Question from "./Questions/Question";

const QuestionContainer = props => {
  console.log("container props", props);

  const [input, setInput] = useState({
    title: "",
    question: "",
    business_type: "",
    entrepreneur_id: localStorage.getItem('id')
  });

  const handleInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addQuestion(input);
    setInput({
      title: "",
      question: "",
      business_type: "",
      entrepreneur_id: localStorage.getItem('id')
    });
    console.log(input)
  };

  return (
    <div>
      <h1>My Questions</h1>
      <form onSubmit={handleSubmit}>
        <h2>add a new Question</h2>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={input.title}
          onChange={handleInput}
        />
        <label htmlFor="question">question</label>
        <input
          type="text"
          name="question"
          value={input.question}
          onChange={handleInput}
        />
         <label htmlFor="business_type">business type</label>
        <input
          type="text"
          name="business_type"
          value={input.business_type}
          onChange={handleInput}
        />
        <button>add Question</button>
      </form>
      {props.questions.map((question, i) => (
        <Question
          question={question}
          key={i}
          updateQuestion={props.updateQuestion}
          deleteQuestion={props.deleteQuestion}
        />
      ))}
    </div>
  );
};

export default QuestionContainer;
