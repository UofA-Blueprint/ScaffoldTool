import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-primary-main p-6 fixed w-screen">
      <div className="flex items-center text-white mr-6">
        <span className="font-semibold text-xl">Scaffold Tool</span>
      </div>
      <div className="w-full text-sm block sm:flex sm:items-center sm:w-auto">
        <Link
          to="/"
          className="block mt-4 sm:inline-block sm:mt-0 text-primary-light hover:text-white mr-4"
        >
          Home
        </Link>
        <Link
          to="/firebase-connection"
          className="block mt-4 sm:inline-block sm:mt-0 text-primary-light hover:text-white mr-4"
        >
          Firebase
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
