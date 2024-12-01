import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <div className="container">
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
