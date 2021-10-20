import React from 'react';

const Doctors = (props) => {
    const { doctorName, position, doctorImg, noOfYear } = props.service;
    return (
        <div className="col">
            {/* services details  */}
            <div className="card h-100" style={{ backgroundColor: "#e3f2fd" }}>
                <img src={doctorImg} className="card-img-top " alt="" height="300" />
                <div className="card-body">
                    <h5 className="card-title title ">{doctorName}</h5>
                    <p className="card-text text-secondary lh-sm mt-3 ">designation:{position}</p>
                    <p className="card-text title lh-sm mt-3">Practice Time: {noOfYear}</p>
                </div>
            </div>
        </div >
    );
};

export default Doctors;