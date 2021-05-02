import React from 'react';
import './Footer.css';
import FooterCol from './FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from "../../../images/coding (2).png"
const Footer = () => {
    const ourAddress = [
        { name: "Doulotpur, Khulna" },
        { name: "Bangladesh" },

    ]
    const services = [
        { name: "Frontend Development" },
        { name: "Backend Development" },
        { name: "Website Designing" },
    ]
    return (
        <footer className="footer-area clear-both mt-5">
            <div className="container pt-5">
                <div className="row py-5">
                    <div className="col-md-6">
                        <div className="d-flex ">
                            <img className="transaction-area mb-3 w3-spin" style={{ height: "50px" }} src={logo} alt="" />
                            <h3 className=" pl-4 pt-2 text-light">Mohammad <span style={{ color: '#f50057' }}>  Eusha</span></h3>
                        </div>
                        <p className="text-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio velit dignissimos quidem ipsa voluptatum numquam quis cupiditate quo, natus, illum laudantium? Esse eos, facilis tempore temporibus laboriosam odit asperiores?</p>
                    </div>
                    <FooterCol key={1} menuTitle="Services" menuItems={services} />
                    <FooterCol key={2} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href=" https://www.facebook.com/abdullah.eusha.9" target="blank"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href=" https://github.com/MohammadEusha" target="blank"><FontAwesomeIcon className="icon active-icon" icon={faGithub} /></a></li>
                            <li className="list-inline-item"><a href=" https://www.linkedin.com/in/mohammadeusha/" target="blank"><FontAwesomeIcon className="icon active-icon" icon={faLinkedin} /></a></li>
                        </ul>

                    </FooterCol>
                </div>
                <footer className="copyRight text-center pb-2 text-light">
                    <p>Copyright <span style={{ color: "#f50057" }}>{(new Date()).getFullYear()} </span> All Rights Reserved</p>
                </footer>
            </div>
        </footer>

    );
};

export default Footer;