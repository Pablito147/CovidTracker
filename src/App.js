import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Slovakia from './Components/slovakia/slovakia.component'
import Home from './Components/home/home.component';
import Header from './Components/header/header.component';

import './App.css';

function App() {
  //const urlStates = 'https://corona.lmao.ninja/v2/countries';
  // const urlAll = 'https://disease.sh/v3/covid-19/all?yesterday=true&twoDaysAgo=true&allowNull=false';

  return (
    <div className="root-container">
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Slovakia' component={Slovakia} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
