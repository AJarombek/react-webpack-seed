/**
 * Create a root component for the react application
 * @author Andrew Jarombek
 * @since 3/21/2018
 */

import React from 'react';
import {hot} from 'react-hot-loader';
import TechnologyList from './TechnologyList';

import './app.scss'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            technologies: [
                {
                    id: "375e6c2b-d799-47ef-848d-84b42bef7a29",
                    name: "JavaScript",
                    release_date: new Date('1995-12-04')
                },
                {
                    id: "75bb50f5-9067-4a30-964f-a3f0d42b5ca4",
                    name: "Webpack",
                    release_date: new Date('2012-03-10')
                }
            ]
        }
    }

    render() {
        const {technologies} = this.state;
        return (
            <div>
                <p className="title">React Webpack Seed</p>
                <p className="sub-title">Technologies used</p>
                <TechnologyList techList={technologies} />
            </div>
        );
    }
}

// Enable Hot Module Replacement on this component
export default hot(module)(App);