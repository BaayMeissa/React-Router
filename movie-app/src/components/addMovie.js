import { useState } from "react";

const AddMovie = (props) => {
    const [titre, setTitre] = useState('');
    const [description, setDescription] = useState('');
    const [posterUrl, setPosterUrl] = useState('');
    const [note, setNote] = useState('');
    

    const newMovie = {
        titre:titre,
        description:description,
        posterUrl:posterUrl,
        note:Number(note)
    }

    const handleSubmiit = (e)=>{
        props.addMovie(newMovie);
        e.preventDefault();
        setTitre('');
        setDescription('');
        setPosterUrl('');
        setNote('');
    }


    return (
        <form 
        onSubmit={handleSubmiit} style={{margin:"50px", display:"flex", flexDirection:"column", justifySelf:"center", gap:"10px", width:"500px"}}>
            <h2>N'hésitez pas à ajouter vos films...</h2>
            <label htmlFor="titre">Titre</label>
            <input value={titre} onChange={(e)=>setTitre(e.target.value)} type="text" placeholder="Titre du film..." />
            <label htmlFor="description">Description</label>
            <input value={description} onChange={(e)=>setDescription(e.target.value)}  type="text" placeholder="Description du film..." />
            <label htmlFor="Image">Lien de l'image</label>
            <input value={posterUrl} onChange={(e)=>setPosterUrl(e.target.value)}  type="text" placeholder="Copier puis coller ici l'URL de l'image..." />
            <label htmlFor="Note">Note</label>
            <input value={note} onChange={(e)=>setNote(e.target.value)}  type="text" placeholder="Note..." />
            <button type="submit"
            style={{marginTop:"30px", height:"25px",alignSelf:"center", backgroundColor:"black", color:"white", borderRadius:"10px"}}>
                Ajouter le film</button>
            </form>
    )
}

export default AddMovie;