import { useParams, useNavigate } from "react-router-dom";

const MovieDetail = (props) => {
    const navigate = useNavigate();
  const { id } = useParams();
  const movie = props.movies.find((movie) => movie.id === parseInt(id));
  if(!movie){
    return(
        <div><h1 style={{textAlign:"center", color:"red"}}>Film pas disponible</h1></div>
    )
  }
  return (
    <>
    <div style={{textAlign:"center"}}>
        <h1>{movie.titre}</h1>
        <p style={{width:"900px", textAlign:"center", margin:"auto"}}>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerUrl}
        title={movie.titre}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

    </div>

    <button onClick={()=>navigate('/')} style={{marginTop:"100px", display:"flex", justifySelf:"center"}}>Retour a l'accueil</button>
    </>
  );
};

export default MovieDetail;