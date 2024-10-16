import { useState } from 'react'
import CardSidebar from './components/CardSidebar'
import Container from './components/Container'
import Header from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

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
        <Outlet/>
      </Container>
    </>
  )
}

export default App
