import React from 'react'
import './NavBar.css'
function NavBar() {
  return (
    <div className='nav'><img src="/hynaplay_logo.jpg" alt="HynaPlay" style={{height:'48px', objectFit:'contain'}} />
      
        <div className='icons'>
            <i class="fa-solid fa-user"></i>
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-house"></i>
            <i class="fa-solid fa-tv"></i>
            <i class="fa-solid fa-film"></i>
            <i class="fa-solid fa-bowling-ball"></i>
            </div>
        
    </div>
  )
}

export default NavBar