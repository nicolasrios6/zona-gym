import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import gimnasios from '../../gymMock';
import GymDetail from '../GymDetail/GymDetail';

const GymDetailContainer = () => {

    const [gym, setGym] = useState({})
    const {id} = useParams()
    console.log(useParams())

    const getGym = () => {
        return new Promise((resolve, reject) => {
            resolve(gimnasios)
        })
    }

    useEffect(() => {
        console.log('gimnasio filtrado por id:',gymFilter)
        setGym(gymFilter)
    }, []);

    const gymFilter = gimnasios.find((gimnasio) => {
        return gimnasio.id === Number(id)
    })

    return (
        <div>
            <GymDetail data={gym}/>
        </div>
    );
}

export default GymDetailContainer;
