import React from 'react';
import logo from './logo.svg';

const LazyLoader = () => {
    return (
        <>
            <div className="loader-wrappepr d-flex justify-content-center align-items-center">
                <img src={logo} className="Lazy-Loader-logo" alt="logo" />
            </div>
        </>
    );
};

export default LazyLoader;