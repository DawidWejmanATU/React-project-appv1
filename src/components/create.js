import { useState } from "react";
import axios from "axios";

function Create()
{
    const [filmTitle, setfilmTitle] = useState('');
    cosnt [poster, setposter] =useState('');
    const [director, setDirector] = useState('');




const handleSubmit = (e)=>{
    e.preventDefault();

    console.log("filmTitle: " +filmTitle+
    "poster: " +poster+
    "director: " +director);

    const films = {
        filmTitle:filmTitle,
        poster:poster,
        director:director
    };

    axios.post('http://localhost:4000/api/films', films)
    .then()
    .catch();
}

return (
    <div>
        <h2>Welcome!!! components</h2>
        <from>onsubmit={handleSubmit}
        <div className="form-group">
            <label>Add film title: </label>
            <input type="text"
            className="form-control"
            value={filmTitle}
            onChange={(e)=> {setfilmTitle(e.target.value) }}
            />
            </div>
            <div className="form-group">
                <label>Add film poster</label>
                <input type="text"
                className="form-control"
                value={poster}
                onChange={(e)=>{setposter(e.target.value) }}
                />
                </div>
                <div className="form-group">
                    <label>Add film director</label>
                    <input type="text"
                    className="form-control"
                    value={director}
                    onChange={(e)=>{setDirector(e.target.value) }}
                    />
</div>
<div>
    <input type ="submit"
    value="Add film">
    </input>
</div>
                
        </from>
    </div>
);

}

export default Create;