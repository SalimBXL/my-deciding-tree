import React from "react";
import PropTypes from "prop-types";
import AnswerButton from "./AnswerButton";
import "./Question.css";


const Question = ({question, onClick}) => {
    const {id, text, image, answers} =  question;
  
    const handleClick = (nextQuestion) => {
      return onClick(nextQuestion);
    }
  
    return (
      <div className='Question'>
        
        <p className='Question-title'>Node #{id}</p>

        {(image && image.length > 0) && <img 
          src={image} 
          alt={image} 
          className="Question-answers-image"
        />}
        
        <h3 className='Question-text'>{text}</h3>
        
        <div className='Question-answers'>
            {answers.map((answer, idx) => {
            const {text, image, nextQuestion} = answer;
            return (
                <AnswerButton
                    key={`${id}-${idx}`}
                    value={text}
                    image={image}
                    nextQuestion={nextQuestion}
                    onClick={handleClick}
                />
            );
            })}
        </div>
      </div>
    );
}

Question.propTypes = {
  question: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

Question.defaultProps = {
  question: null,
  onClick: null
}

export default Question;