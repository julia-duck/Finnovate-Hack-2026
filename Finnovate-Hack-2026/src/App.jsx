import { useState } from 'react'
/*import reactLogo from './assets/react.svg'*/
import './App.css'

function App() {

  return (
    //html code here
    <div>
      <Header />
     <div style={{display: 'flex', justifyContent: 'center'}}>
        <input class="search-bar" placeholder="Search Companies" />
     </div>
    </div>
  )
}

function Header() {
  return (
    <div>
      <h1 class="title">SUSTAINABUDDIES</h1>
    </div>
  )
}

export default App
