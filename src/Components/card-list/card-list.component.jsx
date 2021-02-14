import React from 'react';

import './card-list.styles.css'

const CardList = ({ data }) => {
    const displayedElements = 10;


    const toNumber = (number) => {
        // return number.toLocaleString()
        return number > 10000 ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : number;
    }
    return (
        data.filter((item, inedex) => inedex < displayedElements)
            .map((countrie, i) => {
                return (
                    <div key={i} className="Country-container">
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
            )
    )
}
export default CardList;