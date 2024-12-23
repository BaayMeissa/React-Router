import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = (props)=>{
    return(
    <div style={{display:"flex", flexWrap:"wrap",justifyContent:"center", gap:"20px", margin:"10px"}} >
    {props.films.map((film, index)=>(
        <Link to={`/movies/${film.id}`} key={index} style={{textDecoration:"none", color:"black"}}><MovieCard {...film}/></Link>
    ))}
    </div>
    )
}
export default MovieList