import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';

function FilmItem(props){
    return (
        <div>
            <Card>
                <Card.Header>{props.MyFilm.Title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.MyFilm.cover}alt='' ></img>
                        <footer>
                            {props.MyFilm.director}
                        </footer>
                    </blockquote>
                </Card.Body>
                <Link to={"/edit/"+props.MyFilm._id} className='btn btn-primary'>Edit</Link>
                        <Button wariant='danger' onClick={
                            (e)=>{
                                axios.delete('http://localhost:4000/api/films' +props.MyFilm._id)
                                .then((res)=>{
                                     props.reload();
                                })
                                .catch()
                            }
                        }>Delete</Button>
            </Card>
        </div>
    );
}


export default FilmItem;