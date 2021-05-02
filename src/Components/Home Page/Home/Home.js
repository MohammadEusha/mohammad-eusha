import React from 'react';

import About from '../About/About';
import Appbar from '../Appbar/Appbar';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MyProject from '../MyProject/MyProject';
import MyServices from '../MyServices/MyServices';
import MySkills from '../MySkills/MySkills';

const Home = () => {

    return (
        <div style={{ backgroundColor: '#12161f', scrollBehavior: "smooth" }}>
            <Appbar></Appbar>
            <Header></Header>
            <About></About>
            <MySkills></MySkills>
            <MyProject></MyProject>
            <MyServices></MyServices>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;