import './App.css';
import Coins from './component/Coins/Coins.js';
import Coininfo from './component/Coins/Coininfo.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/coininfo:id" exact>
          <Coininfo></Coininfo>
        </Route>
        <Route path="/" exact>
          <Coins></Coins>
        </Route>

      </Switch>
    </BrowserRouter>

  );
}

export default App;
