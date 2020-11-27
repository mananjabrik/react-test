import React from 'react';
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
  <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact />
      </Switch>
    </Router>
    <ImageSlider />
      
  </>
  );
}

export default App;
