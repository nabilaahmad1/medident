import { useEffect, useState } from "react";

const useService = () => {
    // fetch services data 
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/service.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    // return service details 
    return [services];
}
export default useService;