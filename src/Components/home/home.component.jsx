import React from 'react';

import FilterSection from '../filter-section/filter-section.component';
import HeadDataShowCase from '../head-data-showcase/head-data-showcase.component'

import './home.styles.css';
const Home = () => (
    <div className='home-container'>
        <HeadDataShowCase></HeadDataShowCase>
        <FilterSection></FilterSection>
    </div>
)


export default Home;