import React from 'react';
// import PropTypes from 'prop-types';
import {
  WhatsappLogo,
  Envelope,
  LinkedinLogo,
  GithubLogo
} from 'phosphor-react';
import { Logo } from '../Logo';

function Footer() {
  return (
    <footer className="flex flex-col gap-2 justify-center items-center bg-opacity-90 bottom-0 bg-black w-full text-sm">
      <Logo width="150px" />
      <hr className="w-72 h-2" />
      <p className="flex justify-center items-center">
        <span>
          <Envelope
            size={24}
            color="#ebebeb"
            weight="light"
            className="inline-block "
          />
        </span>
        <span className="ml-2">felipe14062000@gmail.com</span>
      </p>
      <a
        href="https://wa.me/+5592981852735"
        target="_blank"
        rel="noreferrer"
        className="flex justify-center items-center"
      >
        <span>
          <WhatsappLogo
            size={24}
            color="#ebebeb"
            weight="light"
            className="inline-block "
          />
        </span>
        <span className="ml-2">+55 92 98185-2735</span>
      </a>
      <div className="flex mb-4">
        <a
          href="https://www.linkedin.com/in/felipe-pinto-coder/"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center items-center"
        >
          <span>
            <LinkedinLogo
              size={24}
              color="#ebebeb"
              weight="light"
              className="inline-block"
            />
          </span>
        </a>
        <a
          href="https://github.com/FP-Coding"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center items-center"
        >
          <span>
            <GithubLogo
              size={24}
              color="#ebebeb"
              weight="light"
              className="inline-block"
            />
          </span>
        </a>
      </div>
      <p className="bottom-0 mb-2 w-full pl-6">
        <span className="ml-4">Desenvolvido por</span>
        <a href="https://github.com/FP-Coding" target="_blank" rel="noreferrer">
          {' '}
          Felipe Pinto,
        </a>
        <span> 2022</span>
      </p>
    </footer>
  );
}

// Footer.propTypes = {}.isRequired;

export default Footer;
