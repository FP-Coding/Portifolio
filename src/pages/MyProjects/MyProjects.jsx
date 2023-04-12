import React from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Projects } from '../../components/Projects';

function MyProjects() {
  return (
    <>
      <Header />
      <Projects isSoloPage />
      <Footer />
    </>
  );
}
export default MyProjects;
