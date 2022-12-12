import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GymDetail from '../GymDetail/GymDetail';
import { getDoc, doc } from 'firebase/firestore';
import dataBase from '../../utils/firebaseConfig';
import { useLocation } from 'react-router-dom';

const GymDetailContainer = () => {

    const [gym, setGym] = useState({})
    const {id} = useParams()
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0,0)
    }, [location])

    useEffect(() => {
        getGym()
        .then((gym) => {
            setGym(gym)
        })
    }, [id]);

    const getGym = async () => {
        const docRef = doc(dataBase, 'gimnasios', id)
        const docSnapshot = await getDoc(docRef)
        let gym = docSnapshot.data()
        gym.id = docSnapshot.id
        return gym
    }

    return (
        <div>
            <GymDetail data={gym}/>
        </div>
    );
}

export default GymDetailContainer;
