/**
 * Create a root component for the react application
 * @author Andrew Jarombek
 * @since 3/21/2018
 */

import React from 'react';
import {hot} from 'react-hot-loader';

const App = () => <p className="hw">Hello World!!</p>;

// Enable Hot Module Replacement on this component
export default hot(module)(App);