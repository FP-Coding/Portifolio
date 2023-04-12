import React from 'react';
import { bool } from 'prop-types';
import projects from '../../assets/projects/projects';
import { CardProject } from '../CardProject';

function Projects({ isSoloPage }) {
  const margin = isSoloPage === true ? 'mt-40' : '';
  return (
    <div
      id="projetos"
      className={`flex flex-col gap-6 ${margin} justify-center items-center p-6 py-20 bg-opacity-20 bg-white rounded-lg m-12 mr-10 ml-10`}
    >
      <h2 className="text-3xl font-bold">PROJETOS</h2>
      <hr className="w-72 h-2" />
      <div className="flex gap-10 w-[90%] justify-center items-center flex-wrap">
        {projects.map((info) => (
          <CardProject key={`project-${info.name}`} {...info} />
        ))}
      </div>
    </div>
  );
}

Projects.propTypes = {
  isSoloPage: bool
}.isRequired;

export default Projects;
