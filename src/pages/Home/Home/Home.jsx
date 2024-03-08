import React from 'react';
import Banner from '../Banner/Banner';
import Cartegory from '../Category/Cartegory';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from './Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet><title>Bistro Boss | Menu</title></Helmet>
            <Banner/>
            <Cartegory/>
            <PopularMenu/>
            <Featured/>
            <Testimonials/>
        </div>
    );
};

export default Home;