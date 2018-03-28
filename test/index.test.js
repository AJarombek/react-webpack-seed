/**
 * Test the root App component with Jest and Enzyme
 * @author Andrew Jarombek
 * @since 3/21/2018
 */

import React from 'react';
import {shallow} from 'enzyme';
import App from '../src/App';

test('App has Hello World <div>', () => {

   const app = shallow(<App />);

   expect(app.find('.title')).toHaveLength(1);
});