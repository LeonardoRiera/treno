import React from 'react'
import tdeTreno from '../../image/tdeTreno.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navContainer">
            <div class="container-fluid">
                <div className='frontNav'>
                    <img src={tdeTreno} alt="logo de treno" className='logodeTreno' />
                    <p className='navNombre'>Treno.digital</p>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                    <a class="nav-link links" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link links" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link links" href="#">Pricing</a>
                    </li>
                
                </ul>
                </div>
            </div>
        </nav>

    </div>
  )
}

export default Navbar