import React, { Component, useState }  from 'react';
import './App.css';
import { NavBar } from './Components/NavBar.jsx';
import { Banner } from './Components/Banner';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import Contact_Me from './Components/Contact_me'
import { Footer } from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App=() => {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
       <Projects/>
       <Contact_Me/>
       <Footer/>
    </div>
  );
}

export default App;
