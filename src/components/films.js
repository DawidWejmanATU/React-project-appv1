import FilmsItems from "./filmItem";

function Films(props) {
    if (!Array.isArray(props.MyFilm)) {
        return null; // or handle the case where MyFilm is not an array
    }

    return props.MyFilm.map((films) => {
        return <FilmsItems MyFilm={films} key={films._id} reload={() => {props.Reload();}}></FilmsItems>;
    });
}
export default Films;

