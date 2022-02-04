import React from "react";
import PropTypes from "prop-types";
import "./LinkList.css";

const LinkList = ({links}) => {
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

LinkList.propTypes = {
    links: PropTypes.object.isRequired
}

LinkList.defaultProps = {
    links: null
}

export default LinkList;