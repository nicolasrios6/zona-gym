import { Link } from 'react-router-dom';
import './Footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <Link to='/'>
                <img src='logoFooterSec.png' alt=''/>
            </Link>

            <p className='footer__text'>&copy;2022 - Nicolás Ríos</p>
        </div>
    );
}

export default Footer;
