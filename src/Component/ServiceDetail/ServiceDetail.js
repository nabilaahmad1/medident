import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const [services, setServices] = useState([]);

    // etching data from github 
    useEffect(() => {
        fetch(`https://nabilaahmad1.github.io/data/service.JSON`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    // reading data from fetch data and matched with id 
    useEffect(() => {
        if (services.length > 0) {
            const data = services.find((obj) => obj.id === Number(serviceId))
            setService(data)
        }
    }, [services]);

    return (
        <div className="container-fluid py-5">
            <div className="heading mb-5">
                <h1 className="title lh-base fw-bolder mt-5">Service</h1>
            </div>
            {/* showing details  */}
            <div className="row row-cols-1 row-cols-md-2">
                <div className="col mb-4">
                    <div className="card">
                        <img src={service?.serviceImg} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title title ">{service?.serviceName}</h5>
                            <p className="card-text text-secondary lh-sm mt-3 ">{service?.serviceDetails}</p>
                            <p className="card-text title lh-sm mt-3">Service Price: ${service?.pricing}</p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <img src={service?.doctorImg} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title title ">{service?.doctorName}</h5>
                            <p className="card-text text-secondary lh-sm mt-3 ">designation: {service?.position}</p>
                            <p className="card-text title lh-sm mt-3">Practice Time: {service?.noOfYear}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;