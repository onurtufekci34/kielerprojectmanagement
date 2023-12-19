import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Dashboard from './pages/dashboard/Dashboard'
import Create from './pages/create/Create'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Projekt from './pages/projekt/Projekt'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  

  return (
   
   <div className='App'>
   <BrowserRouter>
   <Sidebar/>
    <div className="container">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/projekt/:id' element={<Projekt/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>

   </BrowserRouter>
   </div>
  )
}

export default App
