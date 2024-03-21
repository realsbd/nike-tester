
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MyNavbar from './components/Navbar'
import About from './pages/About'
import Landingpage from './pages/Landingpage'
import Apply from './pages/Apply'

function App() {
 

  return (
    <>
    <MyNavbar/>
    <Routes>
      <Route path='/' element={ <Landingpage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/apply' element={<Apply/>}/>
    </Routes>
    
    </>
  )
}

export default App
