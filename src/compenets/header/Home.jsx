import React, {useEffect,useState} from 'react'
import Card from '../Card'
import style from './Home.module.css'
const Home = () => {
  const[nowplaying,setnowplaying] = useState([]);
  const[TopRated, setTopRated]= useState([]);
  const[UpComing, SetUpComing] = useState([])

  // fetch API here start
  const fetchnowplaying  = () =>{
    const options = {
      method: 'GET', 
      headers: {
        accept: 'application/json',
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDJlM2NlMTMyNzE0ODA5ZmNmYjAxMTM3MGY1MDQ2MCIsInN1YiI6IjY1NTZmNmRkZDRmZTA0MDExYjkyMWEzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W7CRFpf1rRRELyq2LzxbNbBnDlR5lv2KejSV_pVBYc4",
        }};     

  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setnowplaying(data.results)
    })
    .catch(err => console.error(err));
    }

    const fetchTopRated =() =>{
      const options = {method: 'GET',
       headers: {accept: 'application/json',
      Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDJlM2NlMTMyNzE0ODA5ZmNmYjAxMTM3MGY1MDQ2MCIsInN1YiI6IjY1NTZmNmRkZDRmZTA0MDExYjkyMWEzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W7CRFpf1rRRELyq2LzxbNbBnDlR5lv2KejSV_pVBYc4",
         }};
fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(data => {
     console.log(data);
     setTopRated(data.results)
  })     
  .catch(err => console.error(err));
    }

    const fetchUpComing =() =>{

      const options = {method: 'GET',
      headers: {accept: 'application/json',
     Authorization:
         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDJlM2NlMTMyNzE0ODA5ZmNmYjAxMTM3MGY1MDQ2MCIsInN1YiI6IjY1NTZmNmRkZDRmZTA0MDExYjkyMWEzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W7CRFpf1rRRELyq2LzxbNbBnDlR5lv2KejSV_pVBYc4",
        }};

fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
.then(response => response.json())
.then(data => {
   console.log(data);
   SetUpComing(data.results);   
    })
    .catch(err => console.error(err));
    }



  useEffect(()=>{
    fetchnowplaying();
    fetchTopRated()
    fetchUpComing();

  },[]) 
  //Fetch API here End

  
  return (  
    <div>
      {/* Carousel Sec */}
      {nowplaying.length > 0 && <div style={{position:"relative", height:"80vh"}}>
          <img src={`https://image.tmdb.org/t/p/original${nowplaying[0].backdrop_path}`} 
                style={{
                  width:"100%", 
                  height:"100%", 
                  objectFit:"cover"}}/>
      </div>}
      {/* Carousal section end */}

       {/* UpComing*/}
       <h1>UpComing</h1>
      {UpComing.length > 0 && <div className={style.topRated}>
        { UpComing.map((mov) => <Card movie={mov}/>)
        }
      </div>}
      {/* UpComing */}

      {/* Top Rated start */}
      <h1>TopRated</h1>
      {TopRated.length > 0 && <div className={style.topRated}>
        { TopRated.map((mov) => <Card movie={mov}/>)
        }
      </div>}
      {/* Top Rated End */}

    </div>
  )
}
export default Home


