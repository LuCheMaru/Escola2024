import { useParams } from "react-router-dom"

export default function Artista(){

    const { id } = useParams()

    return(
        <h1>Artista: {id}</h1>
    )
}