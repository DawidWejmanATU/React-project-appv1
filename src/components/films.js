import FilmsItems from "./filmItem";

function Films(props)
{
return props.MyFilms.map(
    (films)=>{
        return <FilmsItems MyFilms={Films} key={Films._id} reload={()=>{props.reload();}}></FilmsItems>
    }
);

}

export default Films;

