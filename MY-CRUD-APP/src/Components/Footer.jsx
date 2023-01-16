import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer>
                <h5 className='text-center py-3 mt-5'>
                    © 2022 | Designed &amp; coded with ❤️ by <Link href="/"><b className="cream">Renish Bhuva</b></Link>
                </h5>
            </footer>
        </>
    );
};

export default Footer;