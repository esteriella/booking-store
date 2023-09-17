import './App.css';
import React, { useState } from 'react';
import { Route, Routes as Link, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm';
import ConfirmationPage from './components/ConfirmationPage';
import ServiceForm from './components/ServiceForm';
import Showcase from './components/Showcase';
import About from './components/About';
import Contact from './components/Contact';
import ServiceProviderRegistration from './components/ServiceProviderRegistration';
import CustomerRegistration from './components/CustomerRegistration';
import ServiceProviderLogin from './components/ServiceProviderLogin';
import CustomerLogin from './components/CustomerLogin';
import LandingPage from './components/LandingPage'



function App() {
  const [services, setServices] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleServiceSubmit = (serviceData) => {
    setServices((prevServices) => [...prevServices, serviceData]);
  };

  const handleUserLogin = (user) => {
    setLoggedInUser(user);
  };

  const handleUserLogout = () => {
    setLoggedInUser(null);
  };

  return (
      <div className="app-container">
        <Header loggedInUser = { loggedInUser } onLogout = { handleUserLogout } />
        <div className="content-container">
          <Routes>

          <Route path = "/" element = { < LandingPage services = {services} /> } />

            <Route path = "/booking-form" element = { < BookingForm services = { services } /> } />
              
            <Route path = "/confirmation-page" element = { < ConfirmationPage /> }  />
              
            <Route path = "/add-service" element = { loggedInUser ? (
              < ServiceForm onServiceSubmit = { handleServiceSubmit } />
            ) : (
              < Navigate to = "/login-service-provider" />
            )} />
            
            <Route path = "/showcase" element =  { < Showcase works = { services } /> } />

            <Route path = "/about" element = { < About /> }  />

            <Route path = "/register-provider" element = { < ServiceProviderRegistration /> }  />

            <Route path="/register-customer" element = { < CustomerRegistration /> }  />

            <Route path="/login-service-provider" element = { < ServiceProviderLogin onLogin = { handleUserLogin } /> }  />

            <Route path = "/login-customer" element = { < CustomerLogin onLogin = { handleUserLogin } /> }  />

            <Route path = "/login-service-provider" element = { < ServiceProviderLogin onLogin = { handleUserLogin } /> }  />

            <Route path = "/contact" element = { < Contact /> }  />
            
          </Routes>

          { loggedInUser ? (
          <button onClick = { handleUserLogout } > Logout </button>
        ) : (
          <>
            <Link to = "/register-provider">Register as a Service Provider</Link>
            <Link to = "/register-customer">Register as a Customer</Link>
            <Link to = "/login-service-provider">Service Provider Login</Link>
            <Link to = "/login-customer">Customer Login</Link>
          </>
        ) }
        </div>
        <Footer />
      </div>
  );
}

export default App;

