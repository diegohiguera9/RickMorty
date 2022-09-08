import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Tarjeta from '../components/Tarjeta';
import '../styles/Home.scss'

const Home = (props) => {

    const [post, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const arrayChar = Array.from({length: 50}, () => Math.floor(Math.random() * 50));

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_PAGE}character/${arrayChar}`)
            .then(response => {
                setPosts(response.data)
            })
            .catch(err => {
                alert(`Ups hay un error ${err.message} comunicate con el servicio`)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div className='tarjetas'>
            {loading? <p>Loading...</p>:
                post.map((item) => {
                    return (
                        <Link to={`/Description/${item.id}`} >
                            <Tarjeta tar={item}/>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Home