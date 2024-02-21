import React, { useState, useEffect } from 'react';
import './App.css';
import MenuBar from './MenuBar';
import RightSideMenu from './RightSideMenu';
import GitHubLogin from './GitHubLogin';
import Cookies from 'js-cookie';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  useEffect(() => {
    const checkAuth = () => {
      const isAuth = Cookies.get('github_login') === 'true';
      setIsAuthenticated(isAuth);
    };
    checkAuth();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <MenuBar />
      </header>
      <main className="App-main">
        <div className="login-container">
          <ConditionalLogin isAuthenticated={isAuthenticated} onLoginSuccess={handleLoginSuccess} />
        </div>
        <RightSideMenu />
      </main>
    </div>
  );
}

interface ConditionalLoginProps {
    isAuthenticated: boolean;
    onLoginSuccess: () => void;
  }
  
  function ConditionalLogin({ isAuthenticated, onLoginSuccess }: ConditionalLoginProps) {
  return isAuthenticated ? (
    <div>Authenticated content</div>
  ) : (
    <GitHubLogin onLoginSuccess={onLoginSuccess} />
  );
}


export default App;
