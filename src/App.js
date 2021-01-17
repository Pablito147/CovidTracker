import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const urlStates = 'https://corona.lmao.ninja/v2/countries';
  const urlAll = 'https://disease.sh/v3/covid-19/all?yesterday=true&twoDaysAgo=true&allowNull=false';

  const toNumber = (number) => {
    // return number.toLocaleString()
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // setCountryDataWithKey(countryData.map((obj, i) => (
  //   { ...obj, key: randomCountries(countryData) }
  // )));
  const [data, setData] = useState([]);
  const [casesDataInFormat, setCasesDataInFormat] = useState([]);
  const [deathsDataInFormat, setDeathsDataInFormat] = useState([]);
  const [recoveredDataInFormat, setRecoveresDataInFormat] = useState([]);

  const [countryData, setCountryData] = useState([]);
  const [searchCountries, setSearchCountries] = useState("");
  const [countryDataWithKey, setCountryDataWithKey] = useState([]);

  const getAllData = () => {
    const fetchData = async () => {
      const resultAll = await axios(urlAll);
      const resultStates = await axios(urlStates);
      setCountryData(resultStates.data)
      setCasesDataInFormat(toNumber(resultAll.data.cases))
      setDeathsDataInFormat(toNumber(resultAll.data.deaths))
      setRecoveresDataInFormat(toNumber(resultAll.data.recovered))
    }
    fetchData();
  }
  useEffect(() => {
    getAllData();
  }, []);

  const randomCountries = (countryData) => {
    return Math.floor(Math.random() * countryData.length)
  }
  // const countryDataWithKey = () => {
  //   const countryDataWithKeyX = countryData.map((obj, i) => (
  //     { ...obj, key: randomCountries(countryData) }
  //   ))
  // }
  // countryDataWithKey()
  // setCountryDataWithKey(countryData.map((obj, i) => (
  //   { ...obj, key: randomCountries(countryData) }
  // )));
  // console.log(countryDataWithKey);

  const filterCountries = countryDataWithKey.filter((item) => {
    return searchCountries !== ""
      ? item.country.toLowerCase().includes(searchCountries.toLowerCase())
      : item;
  });

  const toDate = (dateInMs) => {
    let date = new Date(parseInt(dateInMs));
    return date.toString();
  }

  const countires = filterCountries.map((countrie, i) => {
    if (i < 5) {
      return (
        <div className="Country-container">
          <img src={countrie.countryInfo.flag} alt="Avatar" ></img>
          <div>
            <h3>{countrie.country}</h3>
            <p> Cases Per OneMillion: {toNumber(countrie.casesPerOneMillion)}</p>
            <p> ActivePer OneMillion: {toNumber(countrie.activePerOneMillion)}</p>
            <p> One Case Per People: {toNumber(countrie.oneCasePerPeople)}</p>
            <p> Cases PerOneMillion: {toNumber(countrie.casesPerOneMillion)}</p>
            <p> One TestPer: People {countrie.oneTestPerPeople}</p>
            <p> Today Cases: {countrie.todayCases}</p>
            <p> TodayDeaths: {countrie.todayDeaths}</p>
            <p>Today Recovered: {countrie.todayRecovered}</p>
            {/* <p>Last Update{toDate(countrie.updated)}</p> */}
          </div>
        </div>
      )
    }
  });

  return (
    <div className="root-container">
      <div className="App-container">
        <div className="first">
          <h3>Cases</h3>
          <div className="number">{casesDataInFormat}</div>
          <div className="footerOfTop">
            <small>Fri Jan 15 2021 17:17:04 GMT+0100 (stredoeurópsky štandardný čas)</small>
          </div>
        </div>
        <div className="secound">
          <h3>Deaths</h3>
          <span className="number">{deathsDataInFormat}</span>
          <div className="footerOfTop">
            <small>Fri Jan 15 2021 17:17:04 GMT+0100 (stredoeurópsky štandardný čas)</small>
          </div>
        </div>
        <div className="third">
          <h3>Cured</h3>
          <span className="number">{recoveredDataInFormat}</span>
          <div className="footerOfTop">
            <small>Fri Jan 15 2021 17:17:04 GMT+0100 (stredoeurópsky štandardný čas)</small>
          </div>
        </div>
      </div>
      <input type="text" name="search" placeholder="Search country" onChange={(e) => setSearchCountries(e.target.value)}
      ></input>
      <div className="countires-container">
        <div className="card">
          {countires}
        </div>
      </div>
    </div>
  );
}

export default App;
