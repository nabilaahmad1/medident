import React from 'react';
import useService from '../../Hook/useService';
import Doctors from '../Doctors/Doctors';

const Doctor = () => {
    const [services] = useService();
    return (
        <div className="container-fluid">
            <div className="heading mb-5">
                <h1 className="title lh-base fw-bolder mt-5">Doctors</h1>
            </div>
            {/* getting service details  */}
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    services.map(service => <Doctors
                        key={service.id}
                        service={service}
                    >
                    </Doctors>
                    )
                }
            </div>
        </div>
    );
};

export default Doctor;