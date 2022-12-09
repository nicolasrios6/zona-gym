import { Link } from 'react-router-dom';
import './Footer.scss'
import { useEffect } from 'react';



const Footer = () => {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior:'smooth'})
    }, []);
    return (
        <div className='footer'>
            <Link to='/' onClick={() => {
                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
                }}>
                <img src='logoFooterSec.png' alt=''/>
            </Link>

            <p className='footer__text'>&copy;2022 - Nicolás Ríos</p>
        </div>
    );
}

export default Footer;
