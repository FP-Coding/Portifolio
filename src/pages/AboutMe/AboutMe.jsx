import React from 'react';
import { Footer } from '../../components/Footer';
import { WhoIAm } from '../../components/WhoIAm';
import { Header } from '../../components/Header';

function AboutMe() {
  return (
    <>
      <Header />
      <WhoIAm isSoloPage />
      <Footer />
    </>
  );
}
export default AboutMe;
