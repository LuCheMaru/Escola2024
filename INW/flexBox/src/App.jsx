
import CardSidebar from './components/CardSidebar'
import Container from './components/Container'
import Header from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
      <Header/>
      <Container>
        <Sidebar>
          <CardSidebar/>
          <CardSidebar/>
          <CardSidebar/>
        </Sidebar>
        <Main/>
      </Container>
    </>
  )
}

export default App
