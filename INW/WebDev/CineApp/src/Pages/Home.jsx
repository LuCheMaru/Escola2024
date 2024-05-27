import data from '../../articles.json'

function Home() {
    console.log(data)
    return (
        <>
            <input type="button" id="buscar" placeholder='Digite sua busca'/>
            
            <div className='grid grid-cols-3 gap-3'>
                {data.map(filme => (
                    <div className='card' key={filme.title}>
                        <h1>{filme.title}</h1>
                        <img src="/public/untitled-goose-game-grabs-another-goty-prize-at-2020-gdc-awa_bpsn.jpg" alt="" />
                        <div className='tag'>
                            {filme.tags.map((tag) =>(
                                <span key={tag}> {tag} </span>
                            ))}
                        </div>
                        <div className='text'>
                            {filme.text.map((text) =>(
                                <span key={text} className='text-blue-900'> {text} </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
     );
}

export default Home;