/**
 * @author Andrew Jarombek
 * @since 3/22/2018
 */

import React from 'react';
import PropTypes from 'prop-types';
import dateFormat from 'dateformat';

import './Technology.scss';

const Technology = ({ name, release_date, picture }) =>
    <div className="technology">
        <figure>
            <img src={ require(`${picture}`) } />
        </figure>
        <p className="tech-name">{name}</p>
        <p className="tech-release-date">{dateFormat(release_date, "mmmm dS, yyyy")}</p>
    </div>;

Technology.propTypes = {
    name: PropTypes.string.isRequired,
    release_date: PropTypes.instanceOf(Date).isRequired,
    picture: PropTypes.string.isRequired
};

export default Technology;