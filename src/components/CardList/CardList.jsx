import './CardList.scss'
import Card from '../Card/Card';
import gimnasios from '../../gymMock';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Select from 'react-select'

const zonas = [
    {label: 'Godoy Cruz', value: 'godoycruz'},
    {label: 'Guaymallén', value: 'guaymallen'},
    {label: 'Luján de Cuyo', value: 'lujandecuyo'},
]


const CardList = () => {
    const [gyms, setGyms] = useState([])
    const [zonaElegida, setZonaElegida] = useState([]);
    const {zone} = useParams()


    useEffect(() => {
        getGyms()
        .then((response) => {
            zonaElegida ? filterByZone(response, zonaElegida) : setGyms(response)
        })
        // .catch((error) => {
        //     console.log('Falló la llamada', error)
        // })
    }, [zonaElegida])

    const getGyms = () => {
        return new Promise ((resolve, reject) => {
            resolve(gimnasios)
        })
    }

    const handleChange = (e) => {
        setZonaElegida(e.value)
    }

    // const buscador = gyms.filter(gimnasio => gimnasio.zone === zonaElegida)

    const filterByZone = (array, zonaElegida) => {
        let filtro = array.filter(gimnasio => gimnasio.zone === zonaElegida);
        setGyms(filtro)
    }
    

    // const onlyZone = gyms.map(zona => zona.zone)
    // console.log('Solo zonas:',onlyZone)

    // const igualZona = onlyZone.find(zona => zona === zonaElegida)
    // console.log('igual zona:',igualZona)

    return (
        <div className='cardlist'>
            <Select 
                defaultValue={{label: 'Seleccione la zona', value: 'empty'}}
                options= {zonas}
                onChange={handleChange}
            />

            
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
    )
}

export default CardList;



































    // Promesa
    // const getGyms = () => {
    //     return new Promise((resolve, reject) => {
    //         if(zone) {
    //             resolve(gimnasios.filter((gim) => gim.zone === zone))
    //         } else {
    //             resolve(gimnasios)
    //         }
    //     })
    // }

    // useEffect(() => {
    //     setGyms([])
    //     getGyms()
    //     .then((gimnasios) => {
    //         zone ? filterByZone(gimnasios, zone) : setGyms(gimnasios)
    //     })
    // },[zone])

    // const handleSelectChange = ({value}) => {
    //     console.log(value)
    // }

    // const filterByZone = () => {
    //     let filtro = gimnasios.filter(card => card.zone === zone)
    //     setGyms(filtro)
    // }
    
//     return (
//         <div className='cardlist'>
//             <h2>Busqueda</h2>

//             {/* <Select 
//                 className='search__select'
//                 defaultValue={{label: 'Seleccione la zona', value: 'empty'}}
//                 options={zonas}
//                 onChange={handleSelectChange}
//             /> */}
            
//             {/* {gyms.map(({name, img, id, map, calendar1, calendar2, calendar3, zone}) => {
//                 return(
//                     <div key={id}>
//                         <Card 
//                             name={name} 
//                             img={img} 
//                             id={id} 
//                             // key={id}
//                             map={map} 
//                             calendar1={calendar1} 
//                             calendar2={calendar2} 
//                             calendar3={calendar3} 
//                             zone={zone}
//                         />
//                     </div>    
//                 )
//             })} */}
//         </div>
//     );
// }
