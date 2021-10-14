import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/notFound/404.jpeg'
const NotFound = () => {
    return (
        <div>
            <img src={notFound} alt="" />
            <Link to='/home'>
                <button>Go To Home</button>
            </Link>
        </div>
    );
};

export default NotFound;