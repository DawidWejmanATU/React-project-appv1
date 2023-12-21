import FilmsItems from "./filmItem";

function Films(props)
{
return props.MyFilm.map(
    (films)=>{
        return <FilmsItems MyFilm={films} key={films._id} reload={()=>{props.Reload();}}></FilmsItems>
    }
);

}

export default Films;

