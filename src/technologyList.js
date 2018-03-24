/**
 * @author Andrew Jarombek
 * @since 3/24/2018
 */

import React from 'react';
import Technology from './technology';
import PropTypes from 'prop-types';

const TechnologyList = ({ techList=[] }) =>
    <div className="technology-list">
        { (techList.length === 0) ?
            <p>No Data</p> :
            techList.map(technology =>
                <Technology key={technology.id} {...technology} />
            )
        }
    </div>;

TechnologyList.propTypes = {
    techList: PropTypes.array.isRequired
};

export default TechnologyList;