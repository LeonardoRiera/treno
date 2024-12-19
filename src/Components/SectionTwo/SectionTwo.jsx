import React, { useEffect, useRef } from 'react';
import unElemento from '../../image/unElemento1.png'
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
            <h2 className='elementoTitulo'>Nuestros Servicios</h2>
            <p className='elementoParrafo'>Tu Proyecto Puede Crecer Aun Más y LLegar a Más Gente!</p>
            <p className='elementoParrafo'>Descrubrí Todo lo que el Universo Digital Tiene para Vos!</p>
        </div>

    </div>
  )
}

export default SectionTwo