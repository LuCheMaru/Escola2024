import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"

function DetalheFilmes(){

    const {id} = useParams();
    const [filme, setFilme] = useState([])
    
    const apiKey ='api_key=7c572a9f5b3ba776080330d23bb76e1e'
    const urlBase = 'https://api.themoviedb.org/3/movie/'
    const urlImg = 'https://image.tmdb.org/t/p/w780/'

    useEffect(() => {
        fetch(`${urlBase}${id}?${apiKey}&language=pt-BR`)
        .then(response => response.json())
        .then(response => setFilme(response))
        .catch(error => console.log(error))
    },[])

    return (
        <>
            <div className="detalhe flex flex-row gap-10 p-10">
                <img src={`${urlImg}${filme.backdrop_path}`} alt="" />
                <div className="info grid-cols-2">
                    <h1>{filme.title}</h1>
                    <p>{filme.overview}</p>
                </div>
                
            </div>
            
        </>
        
    )
}

export default DetalheFilmes