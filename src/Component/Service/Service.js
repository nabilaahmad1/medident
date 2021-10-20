import React from 'react';
import useService from '../../Hook/useService';
import Services from '../Services/Services';

const Service = () => {
    const [services] = useService();
    return (
        <div className="container-fluid">
            <div className="heading mb-5">
                <h1 className="title lh-base fw-bolder mt-5">Our Services</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    services.map(service => <Services
                        key={service.id}
                        service={service}
                    >
                    </Services>
                    )
                }
            </div>
        </div>
    );
};

export default Service;