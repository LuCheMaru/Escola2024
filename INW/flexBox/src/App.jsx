
import { useState } from 'react'
import CardSidebar from './components/CardSidebar'
import Container from './components/Container'
import Header from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import { useEffect } from 'react'

function App() {

  const[artistas, setArtistas] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/artistas')
    .then( res => res.json())
    .then( res => setArtistas(res))
    .catch( err => console.log(err))
    .finally(() => console.log("A")) 
  }, [])

  return (
    <>
      <Header/>
      <Container>
        <Sidebar>
          <CardSidebar/>
          <CardSidebar/>
          <CardSidebar/>
        </Sidebar>
        <Main>
          <h1>PvZ</h1>
          {
            artistas
            .filter(artista => artista.song === "pvz")
            .map( artista => (
              <div className='bg-red-700 w-28 h-28 flex flex-col justify-around items-center'>
                <p>{artista.name}</p>
              </div>
            ))
          }
        </Main>
      </Container>
    </>
  )
}

export default App
