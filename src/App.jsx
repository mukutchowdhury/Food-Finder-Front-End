import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import './App.css'

import Navbar from './Components/Navbar';

function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
       <Route path = "" element = {<h1>home page</h1>} />
        <Route path = "login" element = {<h1>Login/Sign up page</h1>} />
        <Route path = "home" element = {<h1>home page</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
