import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarkerAlt, faPhoneSquareAlt} from '@fortawesome/free-solid-svg-icons'

 const infosData = [
        { 
            title: 'Opening Hours',
            description: 'We are open 7/24 hours',
            icon: faClock,
            background: 'primary'
        },
        { 
            title: 'Visit Our Location',
            description: 'Chawkbazar, Chattogram- 4000',
            icon: faMapMarkerAlt,
            background: 'dark'
        },
        { 
            title: 'Contact us now',
            description: '0189999999',
            icon: faPhoneSquareAlt,
            background: 'primary'
        }
    ];
const OfficeInfo = () => {
   
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
            {
                 infosData.map(info => <InfoCard info={info}></InfoCard>)
             }
            </div>
        </section>
    );
};

export default OfficeInfo;