import React from 'react';
import './App.css';
import APIList from './components/APIList';

function App() {
  return (
    <div className="App">
      <h1 style={{color: '#fe0944'}} >API de l'univers Détective Conan</h1>
      <APIList />
    </div>
  );
}

export default App;
