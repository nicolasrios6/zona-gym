import { faDumbbell, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import Icon from '../../Icon';
import Slider from '../Slider/Slider';
import './GymDetail.scss'

const GymDetail = ({data}) => {

    const {name, img, calendar1, calendar2, calendar3, phone, email, address, id, iframe} = data

    return (
        <div className='detail'>
            <div className='detail__img'>
                <h2 className='detail__img__title'>{name}</h2>
                <p className='detail__img__address'> <Icon icon={faLocationDot} /> {address}</p>
                <p className='detail__img__calendar'>{calendar1}</p>
                <p className='detail__img__calendar'>{calendar2}</p>
                <p className='detail__img__calendar'>{calendar3}</p>
            </div>

            <div className='detail__swiper'>
                <h3 className='detail__swiper__title'>Espacios</h3>
                <Slider/>
            </div>

            <div className='detail__activities'>
                <h3 className='detail__activities__title'>Actividades</h3>

                <div className='detail__activities__icons'>
                    <div className='detail__activities__icons__activity'>
                        <Icon icon={faDumbbell} className='icon'/>
                        <p>Musculación</p>
                    </div>
                    <div className='detail__activities__icons__activity'>
                        <Icon icon={faDumbbell} />
                        <p>Musculación</p>
                    </div>
                    <div className='detail__activities__icons__activity'>
                        <Icon icon={faDumbbell} />
                        <p>Musculación</p>
                    </div>
                    <div className='detail__activities__icons__activity'>
                        <Icon icon={faDumbbell} />
                        <p>Musculación</p>
                    </div>
                    <div className='detail__activities__icons__activity'>
                        <Icon icon={faDumbbell} />
                        <p>Musculación</p>
                    </div>
                    <div className='detail__activities__icons__activity'>
                        <Icon icon={faDumbbell} />
                        <p>Musculación</p>
                    </div>
                </div>
            </div>

            <div className='detail__info'>
                <h3 className='detail__info__title'>Información del gimnasio</h3>
                <p className='detail__info__contact'><Icon icon={faPhone} /> <span>Celular:</span> {phone}</p>
                <p className='detail__info__contact'><Icon icon={faEnvelope} /> <span>Mail:</span> {email}</p>

            </div>

            <div className='detail__map'>
                
                <iframe src={iframe} width="390" height="300" style={{border: 0}}  loading="lazy" ></iframe>
            </div>
        </div>
    );
}

export default GymDetail;
