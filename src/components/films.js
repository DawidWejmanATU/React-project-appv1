import FilmItem from "./filmItem";

function FileSystem(props)
{
return props.MyFilms.map(
    (Films)=>{
        return <FilmsItems MyFilms={Films} key={Films._id} reload={()=>{props.reload();}}></FilmsItems>
    }
);

}

export default Films;

