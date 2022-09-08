import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams} from "react-router-dom";

const Description = () => {
    const params = useParams();
    const [post, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_PAGE}character/${params.id}`)
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
        <div>
            <h1>Character Description</h1>
            {loading ? <p>Loading...</p> :

                <div key={post.id}>
                    
                    <h2>{post.name}</h2>
                    <img src={post.image} alt=':)'></img>
                    <p>{post.species}</p>
                    <p> {post.status}</p>
                    <p>{post.gender}</p>
                    <p>{post.origin.name}</p>

                </div>

            }
        </div>
    )
}

export default Description;