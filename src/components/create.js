import React, { useState } from "react";
import axios from "axios";

function Create() {
    const [filmTitle, setFilmTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [director, setDirector] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const film = {
            filmTitle: filmTitle,
            poster: poster,
            director: director
        };

        axios.post('http://localhost:4000/api/film', film)
            .then((response) => {
                console.log('Film created:', response.data);
                // Handle success if needed
            })
            .catch((error) => {
                console.error('Error creating film:', error);
                // Handle error if needed
            });
    }

    return (
        <div>
            <h2>Welcome!!! components</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add film title: </label>
                    <input type="text"
                        className="form-control"
                        value={filmTitle}
                        onChange={(e) => setFilmTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Add film poster</label>
                    <input type="text"
                        className="form-control"
                        value={poster}
                        onChange={(e) => setPoster(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Add film director</label>
                    <input type="text"
                        className="form-control"
                        value={director}
                        onChange={(e) => setDirector(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Add film" />
                </div>
            </form>
        </div>
    );
}

export default Create;