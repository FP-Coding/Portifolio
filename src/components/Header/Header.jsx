import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from '../Dropdown';
import '../../index.css';
// import PropTypes from 'prop-types';

function Header() {
  return (
    <header className="flex justify-between bg-blue-900 pr-6 pl-6">
      <Link to="/" className="m-4">
        <img href="" alt="Logo" />
      </Link>
      <Dropdown />
      <ul className="hidden md:flex list-none gap-4 m-4">
        <li>
          <Link to="/quem-somos">QUEM SOMOS</Link>
        </li>
        <li>
          <Link to="/corpo-juridico">CORPO JURÍDICO</Link>
        </li>
        <li>
          <Link to="/areas-de-atuacao">ÁREAS DE ATUAÇÃO</Link>
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
