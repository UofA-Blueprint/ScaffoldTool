import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({links, titles}) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-primary-main p-6 fixed w-screen">
      <div className="flex items-center text-white mr-6">
        <span className="font-semibold text-xl">Scaffold Tool</span>
      </div>
      <div className="w-full text-sm block lg:flex lg:items-center lg:w-auto">
        {links.map((link, index) => (
            <Link
              key={link}
              to={link}
              className="block mt-4 lg:inline-block lg:mt-0 text-primary-light hover:text-white mr-4"
            >
              {titles[index]}
            </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
