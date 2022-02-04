import React from "react";
import PropTypes from "prop-types";
import "./ActionNavigation.css";

const ActionNavigation = ({links}) => {
    return (
        <div className="Action-navigaton">
            {links.map((link, idx) => {
                const {label, url} = link;
                return (
                    <a 
                        className="Action-navigation-item"
                        href={url}>
                        {label}
                    </a>
                );
            })}
        </div>
    );
}

ActionNavigation.propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        url: PropTypes.string
    }))
}

ActionNavigation.defaultProps = {
    links: [
        {label: "Restart", url: "/"}
    ]
}

export default ActionNavigation;