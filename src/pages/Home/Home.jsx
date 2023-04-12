import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { WhoIAm } from '../../components/WhoIAm';
import { Projects } from '../../components/Projects';

function Home() {
  return (
    <div className="flex flex-col justify-between gap-2">
      <Header />
      <WhoIAm />
      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
