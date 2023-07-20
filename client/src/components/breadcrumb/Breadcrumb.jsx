import React from 'react';
import { Link } from 'react-router-dom';

import pdbrad from '../../images/breadcrumb-product.jpg';

const Breadcrumb = ({ title }) => {
    return (
        <div className=''>
            <ul className='breadcrumb py-16 text-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${pdbrad})` }}>
                <li className='flex justify-center'><Link to='/'>Home</Link> <p className='ml-1'> - {title}</p></li>
                <li className=' text-3xl'><h5>{title}</h5></li>
            </ul>
        </div>
    );
};

export default Breadcrumb;
