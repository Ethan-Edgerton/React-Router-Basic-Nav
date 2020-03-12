import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import {Route} from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
{/* Route is making a pathway/hook for Link to grab. Which is called whatever path= is.Then component= grabs a Component to load*/}
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
  </div>
);

export default App;

