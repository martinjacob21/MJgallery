import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Footer from './components/Footer'
import Header from './components/Header'
import User from './pages/User'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'





function App() {

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/user' element={<User />}></Route>
        <Route path='/login' element={<Auth></Auth>}></Route>
        <Route path='/register' element={<Auth insideRegister />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>

      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
