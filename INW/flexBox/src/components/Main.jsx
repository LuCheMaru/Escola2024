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
        <div className='bg-gray-950 w-3/4 grid grid-row-4 pl-20 items-center'>
          <div className='bg-gray-950 pl-20 items-center'>
            <b className="text-gray-400">Plants vs Zombies</b>
            <div className="w-3/4 flex justify-between">
              {artistas
              .filter(artista => artista.theme === "pvz")
              .map(artista => (
                <Link to={`/artistas/${artista._id}`}>
                  <div className='bg-fuchsia-950 w-28 h-28 flex justify-around text-center items-center text-gray-200'>
                    <b>{artista.name}</b>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        
          <div className='bg-gray-950 w-3/4 pl-20 items-center '>
              <b className="text-gray-400">Five nights at Freddy's</b>
              <div className="w-3/4 flex justify-between">
                {artistas
                .filter(artista => artista.theme === "fnaf")
                .map(artista => (
                  <Link to = {`/artistas/${artista._id}`}>
                    <div className='bg-fuchsia-950 w-28 h-28 flex justify-around text-center items-center text-gray-200'>
                      <b>{artista.name}</b>
                    </div>
                  </Link>
                ))}
              </div>
          </div>

          <div className='bg-gray-950 w-3/4 pl-20 items-center '>
              <b className="text-gray-400">Undertale</b>
              <div className="w-3/4 flex justify-between">
                {artistas
                .filter(artista => artista.theme === "undertale")
                .map(artista => (
                  <Link to = {`/artistas/${artista._id}`}>
                    <div className='bg-fuchsia-950 w-28 h-28 flex justify-around text-center items-center text-gray-200'>
                      <b>{artista.name}</b>
                    </div>
                  </Link>
                ))}
              </div>
          </div>

          <div className='bg-gray-950 w-3/4 pl-20 items-center '>
              <b className="text-gray-400">The Binding Of Issac</b>
              <div className="w-3/4 flex justify-between">
                {artistas
                .filter(artista => artista.theme === "the binding of issac")
                .map(artista => (
                  <Link to = {`/artistas/${artista._id}`}>
                    <div className='bg-fuchsia-950 w-28 h-28 flex justify-around text-center items-center text-gray-200'>
                      <b>{artista.name}</b>
                    </div>
                  </Link>
                ))}
              </div>
          </div>
        </div>
      </>
    )
}