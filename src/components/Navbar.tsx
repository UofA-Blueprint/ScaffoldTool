import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6 fixed w-screen">
      <div className="flex items-center text-white mr-6">
        <span className="font-semibold text-xl">Scaffold Tool</span>
      </div>
      <div className="w-full text-sm block lg:flex lg:items-center lg:w-auto">
        <Link
          to="/"
          className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"
        >
          Home
        </Link>
        <Link
          to="/firebase-connection"
          className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"
        >
          Firebase
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
