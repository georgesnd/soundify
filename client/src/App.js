import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import Home from './components/HomePage/Home';
function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
