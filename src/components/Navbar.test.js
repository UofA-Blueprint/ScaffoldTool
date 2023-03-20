import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders correctly with the correct link paths', () => {
    const waffles = '/path/to/waffles';
    const tree = renderer
      .create(
        <Router>
          <Navbar />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toContainReact(
      <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-primary-light hover:text-white mr-4">
        Home
      </Link>
    );
    expect(tree).toContainReact(
      <Link to={waffles} className="block mt-4 lg:inline-block lg:mt-0 text-primary-light hover:text-white mr-4">
        Firebase
      </Link>
    );
  });
});