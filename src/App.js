import React from 'react'
import 'M:/front_end_development/code/little-lemon/little-lemon-app/src/App.css'
import 'M:/front_end_development/code/little-lemon/little-lemon-app/src/index.css'
import AboutPage from './components/pages/AboutPage'
import MenuPage from './components/pages/MenuPage'
import ReservationsPage from './components/pages/ReservationsPage'
import OrderOnlinePage from './components/pages/OrderOnlinePage'
import LoginPage from './components/pages/LoginPage'
import HomePage from './components/pages/HomePage'
import { Route, Routes } from "react-router-dom"


function newApp() {
    return (
      <>
        <div className="newApp">
          <Routes>
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/MenuPage" element={<MenuPage />} />
            <Route path="/ReservationsPage" element={<ReservationsPage />} />
            <Route path="/OrderOnlinePage" element={<OrderOnlinePage />} />
            <Route path="/LoginPage" element={<LoginPage />} />
          </Routes>
        </div>
      </>
  );
}

export default newApp;
