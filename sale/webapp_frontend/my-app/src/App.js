import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StoreList from './components/StoreList';
import ProductList from './components/ProductList';
import SaleList from './components/SaleList';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={StoreList} />
          <Route path="/products/:storeId" component={ProductList} />
          <Route path="/sales/:storeId" component={SaleList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;