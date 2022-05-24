import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import FreturesProduct from '../FeaturesProduct/FreturesProduct';
import Parts from '../Parts/Parts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FreturesProduct></FreturesProduct>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;
