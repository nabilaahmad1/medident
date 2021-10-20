import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Package from './Package/Package';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState();

    useEffect(() => {
        fetch(`https://nabilaahmad1.github.io/data/service.JSON`)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);

    return (
        <div className="container-fluid py-5">
            <div className="heading mb-5">
                <h1 className="title lh-base fw-bolder mt-5">Service</h1>
            </div>
            {
                service.find(x => x.id === serviceId).map(x => <Package
                    key={x.id}
                    x={x}
                ></Package>)
            }
        </div>
    );
};

export default ServiceDetail;