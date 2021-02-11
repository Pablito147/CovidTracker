import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';


import CardList from './Components/card-list/card-list.component'
import FilterSection from './Components/filter-section/filter-section.component'
import TodoApp from './Components/TestHook/TestHook-component';
//import Header from './Components/head-data-showcase';
import Slovakia from './Components/slovakia/slovakia.component'
import DataShowCase from './Components/head-data-showcase/head-data-showcase.component';
function App() {
  const urlStates = 'https://corona.lmao.ninja/v2/countries';
  const urlAll = 'https://disease.sh/v3/covid-19/all?yesterday=true&twoDaysAgo=true&allowNull=false';

  const toNumber = (number) => {
    // return number.toLocaleString()
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const [data, setData] = useState([]);


  const [countryData, setCountryData] = useState([]);
  // const [countryDataWithKey, setCountryDataWithKey] = useState([]);

  const getAllData = () => {
    const fetchData = async () => {
      const resultAll = await axios(urlAll);
      const resultStates = await axios(urlStates);

      setCountryData(resultStates.data)

    }
    fetchData();
  }
  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="root-container">
      <Router>
        <Switch>
          <Route path='/' component={DataShowCase}></Route>
          <Route path='/Slovakia' component={Slovakia} />
        </Switch>
      </Router>

      <FilterSection />

      {/* <CardList countryData={countryData} toNumber={toNumber}> </CardList> */}
      {/* <TodoApp></TodoApp> */}
    </div>
  );
}

export default App;
