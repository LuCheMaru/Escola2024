import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Artista(){

    const { id } = useParams()
    const [artista, setArtista] = useState({})

    useEffect (() => {
        fetch(`http://localhost:3000/artistas/${id}`)
        .then(res => res.json())
        .then(data => {setArtista(data); console.log(data)})
        .catch(err => console.log(err))
    },[])

    return(
        <>
        <div className="bg-gray-950 w-3/4 grid grid-row-4 pl-20">
            <h1 style={{color: 'white'}}>Artista: {artista.name}</h1>
        </div>
        </>
    )
}