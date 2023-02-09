import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testomonial from './Testomonial';
import ContactUs from "./ContactUs"
const Home = () => {
    return (
        <div className='px-12'>
            <Banner/>
            <Info/>
            <Services/>
            <MakeAppointment/>
            <Testomonial/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default Home;