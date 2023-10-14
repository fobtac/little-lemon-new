import React from 'react'
import 'M:/front_end_development/code/little-lemon/little-lemon-app/src/App.css'
import {Header} from './components/Header'
import {Nav} from './components/Nav'
import {Main} from './components/Main'
import {Footer} from './components/Footer'


function newApp() {
  return (
    <div className="newApp">
      <Nav />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default newApp;
