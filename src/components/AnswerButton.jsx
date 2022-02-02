import React from "react";
import "./Question.css";

const AnswerButton = ({value, onClick, nextQuestion}) => {

    const handleClick = () => onClick(nextQuestion);
  
    return (
      <button className='Question-answers-item' onClick={handleClick}>
        {value}
      </button>
    );
  };

  export default AnswerButton;