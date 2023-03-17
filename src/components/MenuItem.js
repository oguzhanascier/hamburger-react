import React from 'react'

export default function MenuItem({ image, name, content, price }) {
  return (
    <div className='menuItem'>
      <div style={{backgroundImage:`url(${image})`}}></div>
      <h3>{name}</h3>
      <h6>{content}</h6>
      <p>{price}€</p>
    </div>
  )
}
