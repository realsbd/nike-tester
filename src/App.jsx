
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MyNavbar from './components/Navbar'
import About from './pages/About'
import Landingpage from './pages/Landingpage'

function App() {
 

  return (
    <>
    <MyNavbar/>
    <Routes>
      <Route path='/' element={ <Landingpage/>}/>
      <Route path='about' element={<About/>}/>
    </Routes>
    
    </>
  )
}

export default App
