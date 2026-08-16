import { useState } from 'react'
/*import reactLogo from './assets/react.svg'*/
import './App.css'
import {NavLink, Route, Routes} from 'react-router-dom'
import Company from './Company.jsx'
import UserPage from './UserPage.jsx'
import companyData from './profiles.json'

function App() {
  const [company, editCompany] = useState(companyData[0]);
  const [companies, setCompanies] = useState(companyData);
  return (
    //html code here
    <div>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/company" element={<Company company={company} editCompany={editCompany} />} />
        <Route path="/user" element={<UserPage companies={companies} />} />
      </Routes>
    </div>
  )
}

export function Home() {
  return ( 
    <div>
       <h1 className="title">SUSTAINABUDDIES</h1>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div className="links">
         <NavLink to="/company">Company</NavLink>
          <NavLink to="/user">User</NavLink>
        </div>
       
      </div>
    </div>
  )
}

export function Header() {
  return (
    <div>
     
    </div>
  )
}

export default App
