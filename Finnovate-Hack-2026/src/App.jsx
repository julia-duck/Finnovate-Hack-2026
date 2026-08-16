import { useState } from 'react'
/*import reactLogo from './assets/react.svg'*/
import './App.css'
import {NavLink, Route, Routes} from 'react-router-dom'
import Company from './Company.jsx'

function App() {

  return (
    //html code here
    <div>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/company" element={<Company/>} />
      </Routes>
    </div>
  )
}

export function Home() {
  return ( 
    <div>
      <Header />
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <NavLink to="/company">Company</NavLink>
        <input className="search-bar" placeholder="Search Companies" />
      </div>
    </div>
  )
}

export function Header() {
  return (
    <div>
      <h1 className="title">SUSTAINABUDDIES</h1>
    </div>
  )
}

export default App
