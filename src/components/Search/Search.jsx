import './Search.scss'
import Select from 'react-select'
import gimnasios from '../../gymMock';
import { useState } from 'react';


const Search = () => {

    const [gymsZone, setGymsZone] = useState([])

    const handleChange = (e) => {
        console.log(e)
    }

    return (
        <div className='search'>
            <p className='search__text'>Encontrá el mejor gimnasio de tu zona!!</p>
            <h3 className='search__title'>Búsqueda</h3>

            <Select 
                className='search__select'
                defaultValue={{label: 'Seleccione la zona', value: 'empty'}}
                options={gimnasios.map(gim => ({label: gim.zone, value: gim.id}))}
                onChange={handleChange}
            />
            
        </div>
    );
}

export default Search;