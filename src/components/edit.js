import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Edit(props)
{
    let { id } = useParams();

    const [filmTitle, setfilmTitle] = useState('');
    const [poster, setposter] =useState('');
    const [director, setDirector] = useState('');

    const navigate = useNavigate();

    useEffect(()=>{
        
        axios.get('http://localhost:4000/api/Films/' + id)
        .then((Response)=>{

            setfilmTitle(Response.data.filmTitle);
            setposter(Response.data.poster);
            setDirector(Response.data.director);
        })
        .catch(function(error){
            console.log(error);
        })
    }, []);

    const handleSubmit = (event)=>
    {
        event.preventDefault();
        const newFilm ={
            id: id,
            filmTitle: filmTitle,
            poster: poster,
            director: director
        };
        axios.put('http://localhost:4000/api/Films/' + id, newFilm)
        .then((res)=>{
            console.log(res.data);
            navigate('/read');
        });
    }

    return(
        <div>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label>Add Film title:  </label>
        <input type="text"
        className="form-control"
        value={filmTitle}
        onChange={(e) => setfilmTitle(e.target.value)}
        />
        </div>
        <div className="form-group">
        <label>Add release date: </label>
        <input type="text"
        className="form-control"
        value={poster}
        onChange={(e) => setposter(e.target.value)}
        />
        </div>
        <div className="form-group">
        <label>Add name director: </label>
        <input type="text"
        className="form-control"
        value={director}
        onChange={(e) => setDirector(e.target.value)}
        />
        </div>
        <div className="form-group">
        <input type="submit" value="Edit Film" className="btn btn-primary" />
        </div>
        </form>
        </div>
        );
}