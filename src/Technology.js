/**
 * @author Andrew Jarombek
 * @since 3/22/2018
 */

import React from 'react';
import PropTypes from 'prop-types';

const Technology = ({ name, release_date }) =>
    <div>
        <p className="tech-name">{name}</p>
        <p className="tech-release-date">{release_date.toString()}</p>
    </div>;

Technology.propTypes = {
    name: PropTypes.string.isRequired,
    release_date: PropTypes.instanceOf(Date).isRequired
};

export default Technology;