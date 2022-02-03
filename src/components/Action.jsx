import React from "react";
import "./Action.css";

const Action = ({action}) => {
    const {id, text, image, actions, links} =  action;

    const LinkList = () => {
        return (links && links.length > 0) && (
            <div className="Action-links">
                {links.map((link, idx) => {
                    const {label, url} = link;
                    const key = `link-${idx}`;
                    return (
                        <a
                            key={key}
                            className="Action-links-item" 
                            href={url}>
                            {label}
                        </a>
                    );
                })}
            </div>
        );
    };

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

                

                <LinkList />

            </div>

            <div className="Action-navigaton">
                <button className="Action-navigation-item" onClick={() => {}}>Back to xx</button>
                <button className="Action-navigation-item" onClick={() => {}}>Restart</button>
            </div>
        </>
    );
}

export default Action;