import React from 'react';
import Footer from '../Footer/Footer';
import HBanner from './HBanner/HBanner';
import HCourse from './HCourse/HCourse';
import HTestimonials from './HTestimonials/HTestimonials';

const Home = () => {
    return (
        <div className='bg-white'>
            <HBanner></HBanner>
            <HCourse></HCourse>
            <HTestimonials></HTestimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;