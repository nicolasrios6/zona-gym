import './CardList.scss'
import Card from '../Card/Card';
import { useState, useEffect } from 'react';
import Select from 'react-select'
// Firestore
import { collection, getDocs } from 'firebase/firestore';
import dataBase from '../../utils/firebaseConfig';

const zonas = [
    {label: 'Godoy Cruz', value: 'godoycruz'},
    {label: 'Guaymallén', value: 'guaymallen'},
    {label: 'Luján de Cuyo', value: 'lujandecuyo'},
]

const CardList = () => {
    const [gyms, setGyms] = useState([])
    const [zonaElegida, setZonaElegida] = useState([]);


    useEffect(() => {
        setGyms([])
        getGyms()
        .then((gimnasios) => {
            zonaElegida.length ? filterByZone(gimnasios, zonaElegida) : setGyms(gimnasios)
        })
    }, [zonaElegida])

    const getGyms = async () => {
       const gymSnapshot = await getDocs(collection(dataBase, 'gimnasios'))
       const gymList = gymSnapshot.docs.map((doc) => {
        let gym = doc.data()
        gym.id = doc.id
        return gym
       })
       return gymList
    }

    const handleChange = (e) => {
        setZonaElegida(e.label)
    }

    const filterByZone = (array, zonaElegida) => {
        let filtro = array.filter(gimnasio => gimnasio.zone === zonaElegida);
        setGyms(filtro)
    }

    return (
        <div className='cardlist'>
            <Select 
                defaultValue={{label: 'Seleccione la zona', value: 'empty'}}
                options= {zonas}
                onChange={handleChange}
                className='cardlist__search'
            />
            <div className='cardlist__list'>

                {
                    gyms.map(({name, id, img, map, calendar1, calendar2, calendar3,
                        zone}) => {
                            return(
                                <Card 
                                name={name}
                                key={id}
                                id={id}
                                img={img}
                                map={map}
                                calendar1={calendar1}
                                calendar2={calendar2}
                                calendar3={calendar3}
                                zone={zone}
                                />
                            )
                        })
                    }
            </div>
        </div>
    )
}

export default CardList;