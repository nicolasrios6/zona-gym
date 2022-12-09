import { useState, useEffect } from 'react';
import { ClockLoader } from "react-spinners";
import CardList from '../../components/CardList/CardList'
import './Home.scss'

const Home = () => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2500);
    }, []);
   
    return (
        <div className="home"> 
            {
                loading ?
                <div className="home__loader">
                    <ClockLoader color="#61DAFB" /> 
                </div> :
                <CardList />
            }
        </div>
    );
}

export default Home;
