'use strict'

export function cards(){
  const apiFalsa = [
    {
      estado: 'venta',
      nHabitaciones: 2,
      metrosCuadrados: 50,
      tipo: 'apartamento',
      descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, ea.',
      precio: 500000,
      imagen: 'https://hips.hearstapps.com/hmg-prod/images/apartamento-moderno-kiev6-1642010787.jpg'
    },
    {
      estado: 'alquiler',
      nHabitaciones: 5,
      metrosCuadrados: 40,
      tipo: 'casa',
      descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, ea.',
      precio: 300000,
      imagen: 'https://www.buyincolombia.com/wp-content/uploads/2018/08/buy-in-colombia-colombia-real-estate-realty-finca-raiz-colombia-lots-for-sale-lotes-en-venta-guatavita-gv-19-56-818x540.jpg'
    },
    {
      estado: 'venta',
      nHabitaciones: 2,
      metrosCuadrados: 40,
      tipo: 'finca',
      descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, ea.',
      precio: 3000000,
      imagen: 'https://cdn.homedit.com/wp-content/uploads/2014/05/Arquitectura-en-Estudio-and-Natalia-Heredia-residence.jpg'
    },
    {
      estado: 'venta',
      nHabitaciones: 3,
      metrosCuadrados: 40,
      tipo: 'finca',
      descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, ea.',
      precio: 3000000,
      imagen: 'https://www.medellinadvisors.com/wp-content/uploads/2022/03/fincas-medellin-colombia.jpg'
    },
    {
      estado: 'alquiler',
      nHabitaciones: 2,
      metrosCuadrados: 40,
      tipo: 'casa',
      descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, ea.',
      precio: 3000000,
      imagen: 'https://cdn.homedit.com/wp-content/uploads/2014/05/Arquitectura-en-Estudio-and-Natalia-Heredia-residence.jpg'
    },
    {
      estado: 'alquiler',
      nHabitaciones: 2,
      metrosCuadrados: 40,
      tipo: 'local comercial',
      descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, ea.',
      precio: 3000000,
      imagen: 'https://www.buyincolombia.com/wp-content/uploads/2018/08/buy-in-colombia-colombia-real-estate-realty-finca-raiz-colombia-lots-for-sale-lotes-en-venta-guatavita-gv-19-56-818x540.jpg'
    },
    {
      estado: 'alquiler',
      nHabitaciones: 2,
      metrosCuadrados: 40,
      tipo: 'casa',
      descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, ea.',
      precio: 3000000,
      imagen: 'https://www.medellinadvisors.com/wp-content/uploads/2022/03/fincas-medellin-colombia.jpg'
    },
    {
      estado: 'alquiler',
      nHabitaciones: 2,
      metrosCuadrados: 40,
      tipo: 'local comercial',
      descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, ea.',
      precio: 3000000,
      imagen: 'https://www.buyincolombia.com/wp-content/uploads/2018/08/buy-in-colombia-colombia-real-estate-realty-finca-raiz-colombia-lots-for-sale-lotes-en-venta-guatavita-gv-19-56-818x540.jpg'
    }
  ]

  const tarjetas = document.getElementById('tarjetas');

  let contenido = '';

  for(let objeto in apiFalsa){
    const tarjeta = apiFalsa[objeto];

    contenido += `
      <div class='tarjeta'>
        <img src=' ${tarjeta.imagen} '>
        <div class='tarjeta__metroscuadrados'>
          <p>Habitaciones ${tarjeta.nHabitaciones} </p>
          <p>${tarjeta.metrosCuadrados} m²</p>
        </div>
        <div class='tarjeta__descripcion'>
          <h4> ${tarjeta.tipo} </h4>
          <p> ${tarjeta.descripcion} </p>
        </div>
        <div class='tarjeta__precio'>
          <h4>$ ${tarjeta.precio} </h4>
          <a href='#'>Más detalles</a> 
        </div>
        <div class='tarjeta__estado ${tarjeta.estado}'> ${tarjeta.estado} </div>
      </div>
    `

  }

  tarjetas.innerHTML = contenido;

}