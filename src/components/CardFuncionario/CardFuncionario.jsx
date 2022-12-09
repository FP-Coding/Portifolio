import React from 'react';
import { shape, string, node } from 'prop-types';

function CardFuncionario({ nome, foto, cargo }) {
  return (
    <div className="flex text-center flex-col gap-4">
      <h3>{nome}</h3>
      <img className="w-32 rounded-[10%]" src={foto} alt={nome} />
      {cargo.nome === 'Advogado' ? (
        <p>
          <span>{cargo.oab}</span>
        </p>
      ) : (
        <p>{cargo.nome}</p>
      )}
    </div>
  );
}

CardFuncionario.propTypes = {
  nome: string.isRequired,
  foto: node.isRequired,
  cargo: shape({
    nome: string,
    oab: string
  }).isRequired
};

export default CardFuncionario;
