import React from "react";
import PropTypes from "prop-types";
import "./Question.css";

const AnswerButton = ({value, image, onClick, nextQuestion}) => {

    const handleClick = () => onClick(nextQuestion);
  
    return (
      <button className='Question-answers-item' onClick={handleClick}>
        {(image && image.length > 0) && <img 
          src={image} 
          alt={image}
          className="Question-answers-item-image"
        />}
        {value}
      </button>
    );
  };

  AnswerButton.propTypes = {
    value: PropTypes.string.isRequired,
    image: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    nextQuestion:PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }

  AnswerButton.defaultProps = {
    value: "VALUE",
    image: "",
    onClick: null,
    nextQuestion: null
  }


  export default AnswerButton;