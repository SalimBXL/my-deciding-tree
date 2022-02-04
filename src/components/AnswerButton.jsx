import React from "react";
import PropTypes from "prop-types";
import "./Question.css";

const AnswerButton = ({value, onClick, nextQuestion}) => {

    const handleClick = () => onClick(nextQuestion);
  
    return (
      <button className='Question-answers-item' onClick={handleClick}>
        {value}
      </button>
    );
  };

  AnswerButton.propTypes = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    nextQuestion:PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }

  AnswerButton.defaultProps = {
    value: "VALUE",
    onClick: null,
    nextQuestion: null
  }


  export default AnswerButton;