import React from 'react';
import { useHistory } from 'react-router';
import banner from '../../images/banner.jpg';
import About from '../About/About';
import Review from '../Review/Review';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    // navigate to different url 
    const history = useHistory();
    const handleClick = () => {
        history.push('/about');
    }
    return (
        <div className="container-fluid">
            <div className="row">
                {/* top banner intro text  */}
                <div className="col-lg-6 col-12 py-5 text-center" style={{ backgroundColor: "#e3f2fd" }}>
                    <h1 className="title lh-base fw-bolder mt-5">Your Healthy Smile is Our Responsiblity</h1>
                    <p className="text-secondary lh-sm mt-3">A smile is your unique accessory and pearly white teeth make it even more beautiful. If you want to keep the aching tooth away and want to keep those pearly whites intact, taking good care of your teeth is a must.</p>
                    <button onClick={handleClick} type="button" className="btn btn-primary rounded-pill mt-3 px-5 me-3">Learn More</button>
                </div>
                {/* top banner image  */}
                <div className="col-lg-6 col-12">
                    <img src={banner} alt="Home-top-banner" className="img img-fluid w-100 h-100" />
                </div>
            </div>
            <About></About>
            <Service></Service>
            <Review></Review>
        </div>
    );
};

export default Home;