import { faDumbbell, faEnvelope, faLocationDot, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import Icon from '../../Icon';
import Slider from '../Slider/Slider';
import './GymDetail.scss'

const GymDetail = () => {
    return (
        <div className='detail'>
            <div className='detail__img'>
                <h2 className='detail__img__title'>Sportclub Shopping</h2>
                <p className='detail__img__address'> <Icon icon={faLocationDot} /> Boulevard Perez Cuesta, Guaymallén</p>
                <p className='detail__img__calendar'><span>Lunes a Viernes:</span> 7 a 22hs</p>
                <p className='detail__img__calendar'><span>Sábados:</span> 9 a 13hs</p>
                <p className='detail__img__calendar'><span>Domingos y feriados:</span> cerrado</p>
            </div>

            <div className='detail__swiper'>
                <h3 className='detail__swiper__title'>Espacios</h3>
                <Slider />
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
                <p className='detail__info__contact'><Icon icon={faPhone} /> <span>Celular:</span> 123425423</p>
                <p className='detail__info__contact'><Icon icon={faEnvelope} /> <span>Mail:</span> dsfsdj@dsfsdf.com</p>

            </div>

            <div className='detail__map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.930049307075!2d-68.80197272350831!3d-32.900017669536574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0fb2795c70a5%3A0x6cefaa9393826ca5!2sSportClub%20Mendoza!5e0!3m2!1ses!2sar!4v1668786955060!5m2!1ses!2sar" width="390" height="300" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
}

export default GymDetail;
