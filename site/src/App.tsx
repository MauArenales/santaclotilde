import React from 'react';
import './App.css';
import { Bar, Header, Navbar, Hero, MapComponent, Banner, SolutionMissionVision, Footer } from './components';
import Waves from './components/Waves';

const App: React.FC = () => {

  return (
    <>
      {/* <Bar/> */}
      <Header/>
      {/* <Navbar/> */}
      <Hero/>
      <MapComponent/>
      <Banner/>
      <SolutionMissionVision/>
      <Waves/>
      <Footer/>
    </>
  );
};

export default App;
