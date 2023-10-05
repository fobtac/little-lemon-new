import React from 'react'
import {Header} from './components/Header'
import {Nav} from './components/Nav'
import {Main} from './components/Main'
import {Footer} from './components/Footer'
import './App.css'

function newApp() {
  return (
    <div className="newApp">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default newApp;
