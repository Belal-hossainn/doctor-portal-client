import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import OfficeInfo from '../OfficeInfo/OfficeInfo';

import './header.css';

const Header = () => {
    return (
        <div class="header-container">
            <Navbar></Navbar>
            <HeaderMain/>
            <OfficeInfo></OfficeInfo>
        </div>
    );
};

export default Header;