import React from 'react';
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path='/shop'>
          <Shop />
        </Route>        
      </div>
    </Router>
  );
}

export default App;