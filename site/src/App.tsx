import React from 'react';
import './App.css';
import { Header, Navbar, Hero, MapComponent, Banner, Footer } from './components';
import Waves from './components/Waves';

const App: React.FC = () => {

  return (
    <>
      <Header/>
      <Navbar/>
      <Hero/>
      <MapComponent/>
      <Banner/>
      <Waves/>
      <Footer/>
    </>
  );
};

export default App;
