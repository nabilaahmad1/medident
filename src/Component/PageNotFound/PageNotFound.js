import React from 'react';
import { Link } from 'react-router-dom';
import errorimg from '../../images/banner_error_404.jpg';

const PageNotFound = () => {
    return (
        <div className="container-fluid my-5">
            <img src={errorimg} alt="error-pagenotfound" className="img-fluid w-100 h-100" />
            <Link to="/home">
                <button type="button" className="btn btn-primary rounded-pill mt-3 px-5 me-3">Go Back</button>
            </Link>
        </div>
    );
};

export default PageNotFound;