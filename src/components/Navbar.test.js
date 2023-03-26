/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from './Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

describe('Navbar', () => {
  it('renders correctly with the correct link paths', () => {
    const waffles = '/path/to/waffles';
    const tree = renderer
      .create( <Router>
                <Navbar
        links = {["/"]}
        titles = {["Home"]}
        >
      </Navbar>
	      </Router>
      );
   const aTag = tree.root.findByType('a');
   expect(aTag).toBeDefined();
   expect(aTag.props.href).toBe("/");
   expect(aTag.props.children).toBe("Home")
  });
});
