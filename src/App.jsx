
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MyNavbar from './components/Navbar'
import About from './pages/About'
import Landingpage from './pages/Landingpage'
import Apply from './pages/Apply'
import ContactForm from './components/ContactForm'

function App() {
 

  return (
    <>
    <MyNavbar/>
    <Routes>
      <Route path='/' element={ <Landingpage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/apply' element={<Apply/>}/>
      <Route path='/test' element={<ContactForm/>}/>
    </Routes>
    
    </>
  )
}

export default App
