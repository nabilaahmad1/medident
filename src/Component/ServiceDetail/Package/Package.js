import React from 'react';

const Package = (props) => {
    const { serviceName, serviceDetails, serviceImg, pricing, doctorName, position, doctorImg, noOfYear } = props.x;
    return (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={serviceImg} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title title ">{serviceName}</h5>
                        <p className="card-text text-secondary lh-sm mt-3 ">{serviceDetails}</p>
                        <p className="card-text title lh-sm mt-3">Service Price: ${pricing}</p>
                    </div>
                </div>
            </div>
            <div className="row g-0">
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title title ">{doctorName}</h5>
                        <p className="card-text text-secondary lh-sm mt-3 ">designation:{position}</p>
                        <p className="card-text title lh-sm mt-3">Practice Time: {noOfYear}</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <img src={doctorImg} className="img-fluid rounded-start" alt="..." />
                </div>
            </div>
        </div>
    );
};

export default Package;