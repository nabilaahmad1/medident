import React from 'react';
import logo from '../../../images/tooth.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="container-fluid bg-light mt-5 p-5">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                    <img src={logo} alt="website-logo" width="50" height="40" className="d-inline-block me-3" />
                    <span className="title lh-base fs-2">MediDent</span>
                    <p className="text-secondary lh-base mt-3">A smile is your unique accessory and pearly white teeth make it even more beautiful. If you want to keep the aching tooth away and want to keep those pearly whites intact, taking good care of your teeth is a must.</p>
                    {/* social icons  */}
                    <div className="icon">
                        <a href="http://facebok.com" target="_blank" rel='noreferrer'><i className="fab fa-facebook-square fs-2 mx-3 title"></i></a>
                        <a href="http://twitter.com" target="_blank" rel='noreferrer'><i className="fab fa-twitter-square fs-2 mx-3 title"></i></a>
                        <a href="http://instagram.com" target="_blank" rel='noreferrer'><i className="fab fa-instagram-square fs-2 mx-3 title"></i></a>
                    </div>
                </div>
                {/* services list  */}
                <div className="col-lg-4 col-md-6 col-12">
                    <p className="title fs-3 lh-base text-start ms-5">Services</p>
                    <ul className="text-secondary">
                        <li>Dental Implants</li>
                        <li>Braces</li>
                        <li>Visdon Theet</li>
                        <li>Porcelain Veneers</li>
                        <li>Teeth Whitening</li>
                        <li>Dental Bridges</li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <p className="title fs-3 lh-base text-start ms-5">Opening Hours</p>
                    <table className="table text-secondary">
                        <thead>
                            <tr>
                                <th scope="col">Day</th>
                                <th scope="col">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Monday</td>
                                <td>8:00am - 12:00pm</td>
                            </tr>
                            <tr>
                                <td>Tuesday</td>
                                <td>8:00am - 12:00pm</td>
                            </tr>
                            <tr>
                                <td>Wednesday</td>
                                <td>8:00am - 12:00pm</td>
                            </tr>
                            <tr>
                                <td>Thursday</td>
                                <td>8:00am - 12:00pm</td>
                            </tr>
                            <tr>
                                <td>Friday</td>
                                <td>8:00am - 12:00pm</td>
                            </tr>
                            <tr>
                                <td>Saturday</td>
                                <td>8:00am - 12:00pm</td>
                            </tr>
                            <tr>
                                <td>Sunday</td>
                                <td>8:00am - 12:00pm</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Footer;