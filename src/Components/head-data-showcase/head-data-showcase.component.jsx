import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import './head-data-showcase.styles.css';


const DataShowCase = () => {
    const urlStates = 'https://disease.sh/v3/covid-19/all?yesterday=true&twoDaysAgo=true&allowNull=false';

    const [casesDataInFormat, setCasesDataInFormat] = useState([]);
    const [deathsDataInFormat, setDeathsDataInFormat] = useState([]);
    const [recoveredDataInFormat, setRecoveresDataInFormat] = useState([]);

    const toNumber = (number) => {
        // return number.toLocaleString()
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const getStatesData = () => {
        const fetchData = async () => {
            const resultAll = await axios(urlStates);

            setCasesDataInFormat(toNumber(resultAll.data.cases))
            setDeathsDataInFormat(toNumber(resultAll.data.deaths))
            setRecoveresDataInFormat(toNumber(resultAll.data.recovered))
            // console.log(resultAll.data)
        }
        fetchData();
    }
    useEffect(() => {
        getStatesData();
    }, []);


    return (
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
        </div>)
}
export default DataShowCase;