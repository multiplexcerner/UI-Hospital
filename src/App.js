import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Cars from './components/Cars';
import Details from './components/Details';
import AsterDetails from './components/AsterDetails';
import ApolloDetails from './components/ApolloDetails';
import FortisDetails from './components/FortisDetails';

function App() {
  return (
      <BrowserRouter>
          <div>
            <Route path="/" exact component={HomePage}/>
            <Route path="/hospitalDetails" exact component={Cars} />
            <Route path="/details" exact component={Details} />
            <Route path="/asterDetails" exact component={AsterDetails} />
            <Route path="/fortisDetails" exact component={FortisDetails} />
            <Route path="/apolloDetails" exact component={ApolloDetails} />
          </div>
      </BrowserRouter>
  );
}

export default App;