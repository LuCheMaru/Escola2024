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
            <h1>Artista: {artista.name}</h1>        
        </>

    )
}