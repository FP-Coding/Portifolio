import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from '../Dropdown';
import '../../index.css';
// import PropTypes from 'prop-types';

function Header() {
  return (
    <header className="flex justify-between bg-black pr-6 pl-6 fixed w-full">
      <Link to="/" className="m-4">
        <img href="" alt="Logo" />
      </Link>
      <Dropdown />
      <ul className="hidden md:flex list-none gap-4 m-4">
        <li>
          <a href="#quem-sou">QUEM SOU</a>
        </li>
        <li>
          <Link to="/projetos">PROJETOS</Link>
        </li>
        <li>
          <Link to="/contato">CONTATO</Link>
        </li>
      </ul>
    </header>
  );
}

// Header.propTypes = {}.isRequired;

export default Header;
