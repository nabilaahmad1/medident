import React from 'react';
import { Link } from 'react-router-dom';
import sideimg from '../../images/about.jpg';
import './About.css';

const About = () => {
    return (
        <div className="container mt-5 py-5">
            <div className="row pb-5">
                <div className="col-lg-6 col-12">
                    <img src={sideimg} alt="" className="img-fluid w-100 h-100" />
                </div>
                {/* about us section  */}
                <div className="col-12 col-lg-6 my-auto py-5" style={{ backgroundColor: "#e3f2fd" }}>
                    <h1 className="title lh-base fw-bolder">About Us</h1>
                    <p className="text-secondary lh-sm mt-3">In our friendly dental practice we believe in a professional, caring and individualized approach for each of our patients. Our patients’ comfort is our main concern and you can trust us to provide the best possible care of your oral health. We provide complete family dentistry including cosmetic dentistry, implants, crowns and bridges, dentures, periodontics, orthodontics, oral surgery and endodontics. Our staff are experienced, dental professionals who wish to make every patients visit to our office a positive, pleasant experience.</p>
                    <Link to="/appointment">
                        <button type="button" className="btn btn-primary rounded-pill mt-3 px-5 me-3">Set Appointment</button>
                    </Link>
                    <Link to="/doctors">
                        <button type="button" className="btn btn-primary rounded-pill mt-3 px-5 me-3">View Doctors</button>
                    </Link>
                </div>
            </div>
            {/* count down section  */}
            <div className="row countdown mt-5">
                <div className="col-lg-4 col-md-6 col-12">
                    <i className="fas fa-x-ray fs-1 title lh-base mt-3"></i>
                    <br />
                    <p className="fs-2 title lh-base">531</p>
                    <p className="fs-4 title lh-base">X-Ray</p>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <i className="fas fa-tooth fs-1 title lh-base mt-3"></i>
                    <br />
                    <p className="fs-2 title lh-base">1K</p>
                    <p className="fs-4 title lh-base">Extraction</p>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <i className="far fa-smile-beam fs-1 title lh-base mt-3"></i>
                    <br />
                    <p className="fs-2 title lh-base">970</p>
                    <p className="fs-4 title lh-base">Happy Patient</p>
                </div>
            </div>
        </div>
    );
};

export default About;