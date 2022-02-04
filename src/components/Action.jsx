import React from "react";
import PropTypes from "prop-types";
import LinkList from "./LinkList";
import ActionNavigation from "./ActionNavigation";
import "./Action.css";

const Action = ({action}) => {
    const {id, text, image, actions, links} =  action;

    return (
        <>
            <div className="Action">
                <p className='Action-title'>Node #{id}</p>
            
                <h3 className='Action-text'>{text}</h3>
            
                <ol className='Action-answers'>

                    {actions.map((act, idx) => {
                        const key = `answer-${id}-${idx}`;
                        const {text} = act;
                        return (
                            <li 
                                className="Action-answers-item" 
                                key={key}>
                                {text}
                            </li>
                        );
                    })}
                </ol>

                <LinkList links={links} />

            </div>

            <ActionNavigation  />
            
        </>
    );
}

Action.propTypes = {
    action: PropTypes.object.isRequired
}

Action.defaultProps = {
    action: null
}

export default Action;