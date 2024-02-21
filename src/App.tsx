import React from 'react';
import './App.css';
import MenuBar from './MenuBar';
import RightSideMenu from './RightSideMenu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuBar />
      </header>
      <RightSideMenu />
    </div>
  );
}

export default App;
