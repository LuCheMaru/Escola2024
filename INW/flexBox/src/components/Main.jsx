import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Main(){

  const[artistas, setArtistas] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/artistas')
    .then( res => res.json())
    .then( res => setArtistas(res))
    .catch( err => console.log(err))
    .finally(() => console.log("A")) 
  }, [])

    return(
      <>
          <div className='bg-slate-700 w-3/4 grid grid-cols-4 pl-20 items-center'>
            <h1>Plants vs Zombies</h1>
            {artistas
              .filter(artista => artista.theme === "pvz")
              .map(artista => (
                <Link to={`/artistas/${artista._id}`}>
                  <div className='bg-red-700 w-28 h-28 flex flex-col justify-around items-center'>
                    <p>{artista.name}</p>
                  </div>
                </Link>
              ))}<br/>
          </div>
        
          <div className='bg-slate-700 w-3/4 grid grid-cols-4 pl-20 items-center'>
              <h1>Five nights at Freddy's</h1>
              {artistas
                .filter(artista => artista.theme === "fnaf")
                .map(artista => (
                  <Link to = {`/artistas/${artista._id}`}>
                    <div className='bg-red-700 w-28 h-28 flex flex-col justify-around items-center'>
                      <p>{artista.name}</p>
                    </div>
                  </Link>
                ))}
          </div>
      </>
    )
}