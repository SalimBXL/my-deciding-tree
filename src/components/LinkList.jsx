import React from "react";
import PropTypes from "prop-types";
import "./LinkList.css";

const LinkList = ({links}) => {
    return (links && links.length > 0) && (
        <div className="Action-links">
            {links.map((link, idx) => {
                let {label, url} = link;
                if (label.length < 1) label = "[ACTION]";
                const key = `link-${idx}`;
                return (
                    url.length > 0 &&
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
    links: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        url: PropTypes.string
    })).isRequired
}

LinkList.defaultProps = {
    links: []
}

export default LinkList;