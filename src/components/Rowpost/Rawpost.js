import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import './Rowpost.css'
import {imageUrl,API_KEY} from '../constants/constants'
import axios from '../../axios'
function Rawpost(props) {
  const [movie, setMovies] =useState([])
  const [urlid,seturlId]=useState('')
  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
     // alert('Network Error') 
    })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
const handleMovie = (id)=>{
  console.log(id)
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
   if (response.data.results.length!== 0)
   {
    seturlId(response.data.results[0])
   }
   else {
    console.log("no data")
   }
  })
}
console.log(urlid,"urlid.....")

console.log(props,"props.....")

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movie.map((obj)=>

     <img onClick={()=>handleMovie(obj.id)} className={props.isSmall? 'smallPoster':'poster'}alt='poster' src={`${imageUrl+obj.backdrop_path}`}></img>
      )}
      </div>
       {urlid  &&  <YouTube opts={opts} videoId={urlid.key} />}
    </div>
  )
}

export default Rawpost