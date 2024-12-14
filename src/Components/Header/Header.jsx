import React from 'react'

import creativo from '../../image/creativo.png'
import textEfect from '../../image/efectotrenochico.png'
import './Header.css'

const Header = () => {
  return (
    <div className='headerContainer'>

        <div className="row">
            <div className='col-6 planoContainer'>
                
                <img src={textEfect} alt="" className='trenoPrincipal' />
                <h1>Productos Digitales <br /> Creativos y a tu Alcance.</h1>
               
            </div>

            <div className='col-6 creativoContainer'>
                <img src={creativo} alt="" className='creativo' />
            </div>
        </div>
        
    </div>
  )
}

export default Header