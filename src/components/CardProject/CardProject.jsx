import React from 'react';
import { shape, string, node } from 'prop-types';

function CardProject({ name, image, technologies, description, githubLink }) {
  return (
    <div className="flex text-justify items-center rounded-lg min-w-[275px] md:h-[700px] w-[30%] lg:h-[70vh] border-white border-2 ">
      <a
        href={githubLink}
        className="flex text-justify items-center flex-col gap-[16px] p-[16px]"
      >
        <h3 className="text-center">{name}</h3>
        <br />
        <img className="h-[20vh] rounded-[10%]" src={image} alt={name} />
        <p>{description}</p>
        <br />
        <p>
          <span className="text-center">Tecnologias:</span>
          {` ${technologies.join(' - ')}`}
        </p>
      </a>
    </div>
  );
}

CardProject.propTypes = {
  name: string.isRequired,
  image: node.isRequired,
  technologies: shape({
    nome: string,
    oab: string
  }).isRequired,
  description: string.isRequired,
  githubLink: string.isRequired
};

export default CardProject;
