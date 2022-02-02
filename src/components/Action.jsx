import React from "react";
import "./Action.css";

const Action = ({action}) => {
    const {id, text, image, actions} =  action;

    return (
        <>
            <div className="Action">
                <p className='Action-title'>Node #{id}</p>
            
                <h3 className='Action-text'>{text}</h3>
            
                <ol className='Action-answers'>

                    {actions.map((act, idx) => {
                    const {text} = act;
                    return (
                        <li className="Action-answers-item" key={`${id}-${idx}`}>
                            {text}
                        </li>
                    );
                    })}
                </ol>
            </div>

            <div className="Action-navigaton">
                <button className="Action-navigation-item" onClick={() => {}}>Back to xx</button>
                <button className="Action-navigation-item" onClick={() => {}}>Restart</button>
            </div>
        </>
    );
}

export default Action;