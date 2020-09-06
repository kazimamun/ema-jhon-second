import React from 'react';
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './Component/NotFound/NotFound';
import Review from './Component/Review/Review';
import Inventory from './Component/Inventory/Inventory';
import ProductDetails from './Component/ProductDetails/ProductDetails';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path='/shop'>
            <Shop />
          </Route> 
          <Route path='/review'>
            <Review />
          </Route>
          <Route path='/manage'>
            <Inventory></Inventory>
          </Route>
          <Route exact path='/'>
            <Shop />
          </Route> 
          <Route path="/product/:productKey">
            <ProductDetails />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>      
    </div>
  );
}

export default App;