import React, { useEffect, useState } from 'react';
import Packages from '../Packages/Packages'
const Services = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://obscure-lowlands-49339.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    return (
        <div className="text-center">
            <h1>Our Packages</h1>
            <div className="">
                {
                    packages.map(pack => <Packages pack={pack} key={pack.id}></Packages>)
                }
            </div>
        </div>
    );
};

export default Services;