import { Link } from 'react-router-dom';
import './Header.scss'

const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>
                <img src='logoHeader.png' alt=''/>
            </Link>
        </div>
    );
}

export default Header;
