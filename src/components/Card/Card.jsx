import './Card.scss'
import { Link } from 'react-router-dom';
import gimnasios from '../../gymMock';
import { gimnasio } from '../../gymMock';

const Card = () => {

    const {name} = gimnasio

    return (
        <div className='card'>
            <div className='card__img'>
                <Link to='/detail'><img src='gimnasio.jpeg' alt=''/></Link>
            </div>

            <h2 className='card__title'>{name}</h2>

            <a className='card__map' href='https://goo.gl/maps/uf38gFKooWSkhj3v5' target='_blank'>¿Cómo llegar?</a>

            <div className='card__calendar'>
                <p className='card__calendar__days'><span>Lunes a Viernes:</span> 7 a 22hs</p>
                <p className='card__calendar__days'><span>Sábados:</span> 9 a 13hs</p>
                <p className='card__calendar__days'><span>Domingos y feriados:</span> cerrado</p>
            </div>

            <Link to='/detail'><button className='card__btn'>Ver Gimnasio</button></Link>
        </div>
    );
}

export default Card;
