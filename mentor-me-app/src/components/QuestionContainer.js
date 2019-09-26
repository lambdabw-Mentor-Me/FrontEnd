import React, { useState } from "react";
import Question from "./Questions/Question";

const QuestionContainer = props => {
  console.log("container props", props);

  const [input, setInput] = useState({
    title: "",
    textBody: ""
  });

  const handleInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addQuestion(input);
    setInput({
      title: "",
      textBody: ""
    });
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
        <label htmlFor="Text Body">Text Body</label>
        <input
          type="text"
          name="textBody"
          value={input.textBody}
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
