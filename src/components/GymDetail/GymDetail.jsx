import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import Icon from '../../Icon';
import Slider from '../Slider/Slider';
import './GymDetail.scss'

const GymDetail = ({data}) => {

    const {name, img, calendar1, calendar2, calendar3, phone, email, address, iframe, slide1, slide2, slide3, activities} = data
    const imgStyle = {
        backgroundImage:`linear-gradient(#424141be, #424141be),url(../../../${img})`
    }

    return (
        <div className='detail'>
            <div className='detail__img' style={imgStyle}>
                <h2 className='detail__img__title'>{name}</h2>
                <div>
                    <p className='detail__img__address'> <Icon icon={faLocationDot} /> {address}</p>
                    <p className='detail__img__calendar'>{calendar1}</p>
                    <p className='detail__img__calendar'>{calendar2}</p>
                    <p className='detail__img__calendar'>{calendar3}</p>
                </div>
            </div>

            <div className='detail__swiper'>
                <h3 className='detail__swiper__title'>Espacios</h3>
                <Slider slide1={slide1} slide2={slide2} slide3={slide3} />
            </div>

            <div className='detail__activities'>
                <h3 className='detail__activities__title'>Actividades</h3>
                <div className='detail__activities__list'>
                    {activities?.map(({name, id}) => {
                        return(
                            <div key={id}>
                                <p>{name}</p>
                            </div>
                            
                        )
                    })}
                </div>
            </div>

            <div className='detail__info'>
                <h3 className='detail__info__title'>Información del gimnasio</h3>
                <div className='detail__info__data'>
                    <div className='detail__info__data__contact'>
                        <p><Icon icon={faPhone} /> <span>Celular:</span> {phone}</p>
                        <p><Icon icon={faEnvelope} /> <span>Mail:</span> {email}</p>
                        <p><Icon icon={faLocationDot} /> <span>Dirección:</span> {address}</p>
                    </div>

                    <div className='detail__info__data__map'>
                        <iframe src={iframe} style={{border: 0}} title={name} loading="lazy" ></iframe> 
                    </div>
                </div>
            </div>

        </div>
    );
}

export default GymDetail;
