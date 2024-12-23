const MovieCard = (props)=>{
    return <div style={{borderRadius:"10px", padding:"10px",width:"400px", height:"750px", backgroundColor:"silver", overflow:"hidden"}}>
    <img style={{display:"flex", height:"350px", justifySelf:"center", borderRadius:"5px"}} src={props.posterUrl} alt="" />
    <h2>{props.titre}</h2>
    <h4>Note: {props.note}</h4>
    <p>{props.description}</p>
    </div>
}

export default MovieCard;