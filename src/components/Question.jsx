import React from "react";
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
        
        <h3 className='Question-text'>{text}</h3>
        
        <div className='Question-answers'>
            {answers.map((answer, idx) => {
            const {text, image, nextQuestion} = answer;
            return (
                <AnswerButton
                    key={`${id}-${idx}`}
                    value={text}
                    nextQuestion={nextQuestion}
                    onClick={handleClick}
                />
            );
            })}
        </div>
      </div>
    );
}

export default Question;