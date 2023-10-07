import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import './App.css'
import './scss/main.scss'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <Hero />
        <Sidebar />
        <Main />
        <Footer />
      </div>
    </>
  )
}

export default App
