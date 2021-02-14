import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import CardList from '../card-list/card-list.component';

import './filter-section.styles.css';

const FilterSection = () => {
    const urlStates = 'https://corona.lmao.ninja/v2/countries';
    const [data, setData] = useState([]);

    const getAllData = async () => {
        const fetchData = async () => {
            const resultStates = await axios(urlStates);
            setData(resultStates.data)

        }
        fetchData();
    }

    useEffect(() => {
        getAllData();
    }, []);

    const [searchCountries, setSearchCountries] = useState("");
    const filterCountries = data.filter((item) => {
        return searchCountries !== ""
            ? item.country.toLowerCase().includes(searchCountries.toLowerCase())
            : item;
    });


    return (<div className='filter-section'>
        <input type="text" name="search" placeholder="Search country" onChange={(e) => setSearchCountries(e.target.value)}></input>
        <div className='flex-row-layout'>
            <CardList data={filterCountries}></CardList>
        </div>
    </div>)
}


export default FilterSection;