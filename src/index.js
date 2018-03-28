/**
 * The Entry point for the React.js application
 * @author Andrew Jarombek
 * @since 3/19/2018
 */

import React from 'react';
import {render} from 'react-dom';
import App from './App';

window.React = React;

render(
    <App />,
    document.getElementById('react-container')
);