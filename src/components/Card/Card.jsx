import './Card.scss'
import { Link } from 'react-router-dom';

const Card = ({name, id, img, map, calendar1, calendar2, calendar3, zone}) => {

    // console.log('card id:', {id})

    return (
        <div className='card'>
            <div className='card__img'>
                <Link to={`/gym/${id}`}><img src={`${img}`} alt=''/></Link>
            </div>
            {/* <p className='card__zone'>{`${zone}`}</p> */}
            <h2 className='card__title'>{`${name}`}</h2>

            <a className='card__map' href={`${map}`} target='_blank'>¿Cómo llegar?</a>

            <div className='card__calendar'>
                <p className='card__calendar__days'>{`${calendar1}`}</p>
                <p className='card__calendar__days'>{`${calendar2}`}</p>
                <p className='card__calendar__days'>{`${calendar3}`}</p>
                {/* <p className='card__calendar__days'><span>Lunes a Viernes:</span> 7 a 22hs</p> */}
                {/* <p className='card__calendar__days'><span>Sábados:</span> 9 a 13hs</p> */}
                {/* <p className='card__calendar__days'><span>Domingos y feriados:</span> cerrado</p> */}
            </div>

            <Link to={`/gym/${id}`}><button className='card__btn'>Ver Gimnasio</button></Link>
        </div>
    );
}

export default Card;
