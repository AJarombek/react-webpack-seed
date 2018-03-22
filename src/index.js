
/**
 * The Entry point for the React.js application
 * @author Andrew Jarombek
 * @since 3/19/2018
 */

import React from 'react';
import {render} from 'react-dom';

window.React = React;

render(
    <p>Hello World!</p>,
    document.getElementById('react-container')
);