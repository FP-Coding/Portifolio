import React from 'react';
// import PropTypes from 'prop-types';
import { WhatsappLogo, Envelope } from 'phosphor-react';

function Footer() {
  return (
    <footer className="flex flex-col gap-2 justify-center items-center bg-opacity-90 bottom-0 bg-blue-800 w-full text-sm">
      <img href="" alt="Logo" className="pt-8 mb-4" />
      <hr className="w-72 h-2" />
      <p>Rua Jorge Veiga - nº 262 - Parque 10 - Manaus/AM</p>
      <p>
        <span>
          <Envelope
            size={24}
            color="#ebebeb"
            weight="light"
            className="inline-block "
          />
        </span>
        <span className="ml-2">breves.advocacia@gmail.com</span>
      </p>
      <p className="pb-4">
        <span>
          <WhatsappLogo
            size={24}
            color="#ebebeb"
            weight="light"
            className="inline-block "
          />
        </span>
        <span className="ml-2">+55 92 9430-4333</span>
      </p>
      <p className="bottom-0 mb-2 w-full">
        <span className="ml-4">Desenvolvido por</span>
        <a href="https://github.com/FP-Coding"> Felipe Pinto</a>
      </p>
    </footer>
  );
}

// Footer.propTypes = {}.isRequired;

export default Footer;
