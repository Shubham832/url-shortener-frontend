import React from 'react';
import UrlShortener from './components/urlShortener';
import LoginForm from './components/loginForm';
import './styles.css';

const App = () => {
  return (
    <div className="app-container">
      <UrlShortener />
      {/* <LoginForm /> */}
    </div>
  );
};

export default App;