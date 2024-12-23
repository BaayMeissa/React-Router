import MovieList from './components/MovieList';
import films from './film';
import AddMovie from './components/addMovie';
import MovieDetail from './components/MovieDetail';
import './App.css';
import { Route, Routes, useParams, useLocation } from 'react-router-dom';
import Filtre from './components/Filtre';
import { useState } from 'react';

function App() {
  let location = useLocation();
  const [filtreTitre, setFiltreTitre] = useState('');
  const [filtreNote, setFiltreNote] = useState('')
  const [movies, setMovies] = useState(films)

  const addMovie = (newMovie)=>{
    setMovies([...movies,newMovie])
  }

  const searchNote = (note)=>{
    setFiltreNote(note)
  }

  const searchTitre = (titre)=>{
    setFiltreTitre(titre);
  }

  const getFilteredMovies = () => {
    return movies.filter((film)=>{
      return film.titre.toLowerCase().includes(filtreTitre.toLowerCase()) && film.note>=Number(filtreNote);
    })
    };
    const params = useParams()
    console.log(params)

  return (
    <>
      <Filtre
      searchTitre={searchTitre}
      filtreTitre = {filtreTitre}
      searchNote = {searchNote}
      filtreNote = {filtreNote}
      />
      {/* <MovieList films={getFilteredMovies()}/> */}
    <Routes>
    <Route path='/' element={<MovieList films={getFilteredMovies()}/>}/>
    <Route path='/movies/:id' element={<MovieDetail movies = {getFilteredMovies()}/>} />
    </Routes>
    {/* <button onClick={() => navigate(`/movies/`)}>Something</button> */}
    <AddMovie
    addMovie={addMovie}/>
  </>
  );
}

export default App;