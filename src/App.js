import { useEffect, useState } from 'react';
import './App.css';
import Carta from './components/carta.jsx';
import Moviedata from './assets/movies.json';




function App() {
const [movieList, setMovieList]=useState([]);


  useEffect(()=>{
    console.log(Moviedata);
    setMovieList(Moviedata);

  },[]);


  return (
    <>
      <div className='wrapper'>
        {movieList.map((film)=>(
          <Carta title={film.title} key={film.id} year={film.year} imgUrl={film.image}></Carta>
          )
          )
        }
      </div>
    </>
  );
}

export default App;
