import React from 'react'
import "./ItemDetail.css"

const ItemDetail = ({id,nombre, precio,img}) => {
  return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <img src={img} alt={nombre} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa accusantium provident nam officiis deserunt minus nulla hic cumque? Perferendis maiores nostrum sint ducimus quo nobis. Consequatur reiciendis blanditiis molestiae nulla.</p>
    </div>
  )
}

export default ItemDetail