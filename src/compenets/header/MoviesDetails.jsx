import React, { useEffect,useState } from 'react'
import Card from '../Card'
import { useParams } from 'react-router-dom';

const MoviesDetails = () => {
  const params = useParams()
  const [MoviesDetails, setMoviesDetails]= useState();

  // fetch API here start
  const fetchmoviesdetails  = () =>{
    const options = {
      method: 'GET', 
      headers: {
        accept: 'application/json',
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDJlM2NlMTMyNzE0ODA5ZmNmYjAxMTM3MGY1MDQ2MCIsInN1YiI6IjY1NTZmNmRkZDRmZTA0MDExYjkyMWEzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W7CRFpf1rRRELyq2LzxbNbBnDlR5lv2KejSV_pVBYc4",
        }}; 
        fetch(`https://api.themoviedb.org/3/movie/${params.id}`, options)
        .then(response => response.json())
        .then(data => {
          console.log(data);
         setMoviesDetails(data.results)
        })
        .catch(err => console.error(err));
        }

useEffect(()=>{
  fetchmoviesdetails();
},[])

  return (
    <div>  
      <h1>
       {/*{MoviesDetails.lenth>0 && MoviesDetails.map((mov)=> <Card movie={mov}/>)}*/}
       hjgjhghj
      </h1>

      

    </div>
  )
}

export default MoviesDetails
