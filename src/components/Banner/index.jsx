import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

export default function Banner (props) {
    const {title, backgroundUrl} = props;

    const bannerStyle = backgroundUrl ? { backgroundImage : `url(${backgroundUrl})`} : {}

    return(
        <section className="banner" style={bannerStyle}>
            <h1 className="banner__title">{title}</h1>
        </section>
    )
}

Banner.propType = {
    title: PropTypes.string,
    backgroundUrl: PropTypes.string
}

Banner.defaultProps = {
    title: '',
    backgroundUrl: ''
}