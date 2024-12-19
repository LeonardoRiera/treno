import React, { useEffect, useRef } from 'react';
import unElemento from '../../image/unElemento1.png'
import sombra from '../../image/sombra.png'
import diamond from '../../image/diamond.png'
import './SectionTwo.css'

const SectionTwo = () => {

    const imageRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0]; // Solo necesitamos observar la primera entrada
          if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Agregar clase cuando entra al viewport
          } else {
            entry.target.classList.remove('visible'); // Quitar clase si sale del viewport
          }
        },
        { threshold: 0.1 } // La animación se activa cuando al menos el 10% del elemento es visible
      );
  
      if (imageRef.current) {
        observer.observe(imageRef.current);
      }
  
      return () => {
        if (imageRef.current) {
          observer.unobserve(imageRef.current); // Limpieza cuando el componente se desmonta
        }
      };
    }, []);
  

  return (
    <div className='sectionTwoContainer row'>

        <div className='col-6 elementoFotoContainer'>
            <img src={unElemento} alt="logo simple" className= 'elementoFoto' ref={imageRef} id="miMontaña" />
        </div>
        <div className='col-6 elementoContainerTexto'>
            <img src={sombra} alt="sombra background" className='sombra' />
            <div className='items'>
              <img src={diamond} alt="diamond" className='diamond'/>
              <p className='elementoParrafo'>Llevá tu Proyecto al siguiente nivel con Soluciones Digitales.</p>
            </div>
            <hr className='linea' />
            <div className='items'>
              <img src={diamond} alt="diamond" className='diamond'/>
              <p className='elementoParrafo'>Atraé a tu público con creatividad y tecnología.</p>
            </div>
            <hr className='linea' />
            <div className='items'>
              <img src={diamond} alt="diamond" className='diamond'/>
              <p className='elementoParrafo'>Maximizá tu alcance y crecé en el mundo online.</p>
            </div>
            
            
        </div>

    </div>
  )
}

export default SectionTwo