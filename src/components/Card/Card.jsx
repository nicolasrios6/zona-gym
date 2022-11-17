import './Card.scss'

const Card = () => {
    return (
        <div className='card'>
            <div className='card__img'>
                <img src='gimnasio.jpeg' alt=''/>
            </div>

            <h2 className='card__title'>Sportclub Shopping</h2>

            <a className='card__map' href='#'>¿Cómo llegar?</a>

            <div className='card__calendar'>
                <p className='card__calendar__days'><span>Lunes a Viernes:</span> 7 a 22hs</p>
                <p className='card__calendar__days'><span>Sábados:</span> 9 a 13hs</p>
                <p className='card__calendar__days'><span>Domingos y feriados:</span> cerrado</p>
            </div>

            <button className='card__btn'>Ver Gimnasio</button>
        </div>
    );
}

export default Card;
