import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/home'
import LogIn from './components/login'
import CreateUser from './components/createUser'
import UpdateUser from './components/updateUser'
import DeleteUser from './components/deleteUser'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<LogIn/>}></Route>
      <Route path='/user/createuser' element={<CreateUser/>}></Route>
      <Route path='/user/updateuser' element={<UpdateUser/>}></Route>
      <Route path='/user/deleteuser' element={<DeleteUser/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
