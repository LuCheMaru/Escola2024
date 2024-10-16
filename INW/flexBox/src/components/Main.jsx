import { useEffect, useState } from "react"

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
        <div className='bg-slate-700 w-3/4 grid grid-cols-4 pl-20 items-center'>
          <h1>PvZ</h1>
          {
            artistas
            .filter(artista => artista.game === "pvz")
            .map( artista => (
              <div className='bg-red-700 w-28 h-28 flex flex-col justify-around items-center'>
                <p>{artista.name}</p>
              </div>
            ))
          }
        </div>
    )
}