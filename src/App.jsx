import './App.css'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import {useAuthContext} from './hooks/useAuthContext'

import Dashboard from './pages/dashboard/Dashboard'
import Create from './pages/create/Create'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Projekt from './pages/projekt/Projekt'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import OnlineUsers from './components/OnlineUsers'

function App() {
  
  const {user,authIsReady} = useAuthContext()

  return (
   
   <div className='App'>
   {authIsReady && (
    <BrowserRouter>
    {user && <Sidebar/>}
     <div className="container">
       <Navbar/>
       <Routes>
         <Route path='/' element={user ? <Dashboard/> : <Navigate to='/login'/>}/>
         <Route path='/create' element={user ? <Create/> : <Navigate to='/login'/>}/>
         <Route path='/projekt/:id' element={user ? <Projekt/> : <Navigate to='/login'/>}/>
         <Route path='/login' element={!user ? <Login/> : <Navigate to='/'/>}/>
         <Route path='/signup' element={!user ? <Signup/> : <Navigate to='/'/>}/>
       </Routes>
     </div>
     {user && <OnlineUsers/>}
 
    </BrowserRouter>
   )}
   </div>
  )
}

export default App
