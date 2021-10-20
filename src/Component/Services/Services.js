import React from 'react';
import { Link } from 'react-router-dom';

const Services = (props) => {
    // data distructing
    const { id, serviceName, serviceDetails, serviceImg, pricing } = props.service;
    return (
        <div className="col">
            {/* services details  */}
            <div className="card h-100" style={{ backgroundColor: "#e3f2fd" }}>
                <img src={serviceImg} className="card-img-top " alt="" height="300" />
                <div className="card-body">
                    <h5 className="card-title title ">{serviceName}</h5>
                    <p className="card-text text-secondary lh-sm mt-3 ">{serviceDetails}</p>
                    <p className="card-text title lh-sm mt-3">Service Price: ${pricing}</p>
                    <Link to={`/servicedetail/${id}`}>
                        <button className="btn btn-primary rounded-pill mt-3 px-5" type="button">View Details</button>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default Services;