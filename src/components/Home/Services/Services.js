import React from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Services.css';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png'

const serviceData = [
    {
        name: 'Fluoride Treatment',
        image: fluoride
    },
    {
        name: 'Cavity Filling ',
        image: cavity 
    },
    {
        name: 'Teeth Whitening',
        image: whitening
    }


]
const Services = () => {
    return (
        <section className="service-container">
            <div className="text-center">
            <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
            <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                   {
                       serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                   }
                </div>
            </div>
        </section>
    );
};

export default Services;