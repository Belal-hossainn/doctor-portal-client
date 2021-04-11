import React from 'react';
import featureImage from '../../../images/Mask Group 3.png';

const FeaturedServices = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img style={{width: '100%', height: '100%'}} className="image-fluid" src={featureImage} alt="" srcset="" />
                    </div>
                    <div className="col-md-7 align-self-center pe-5">
                        <h2>Exceptional Dental <br></br> Care, On Your Terms</h2>
                        <p className="text-secondary my-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis fuga facere iure placeat alias. Eos, nesciunt dolores! Totam omnis quo enim necessitatibus voluptatem veniam voluptatum eaque explicabo excepturi eius corporis, soluta labore illum neque ipsam optio nulla. Minima nulla placeat natus quam! Laboriosam magnam possimus ad repudiandae, delectus voluptatibus impedit?</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedServices;