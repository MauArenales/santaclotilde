import React from 'react';
import './App.css';
import { Header, Navbar, Hero, HomeSection, Footer } from './components';

const App: React.FC = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <Hero/>
      <HomeSection/>
      <Footer/>
    </>
  );
};

export default App;