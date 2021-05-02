import React from 'react';

import About from '../About/About';
import Appbar from '../Appbar/Appbar';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MyProject from '../MyProject/MyProject';
import MyServices from '../MyServices/MyServices';
import MySkills from '../MySkills/MySkills';
import BackParticle from '../../../Components/BackParticle/BackParticle'
// function App1() {
//     return (
//         <div>
//             <ParticleBackground />
//             <Home />
//         </div>
//     );
// }

const Home = () => {

    return (
        <div style={{ backgroundColor: '#12161f' }}>
            {/* <BackParticle></BackParticle> */}
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