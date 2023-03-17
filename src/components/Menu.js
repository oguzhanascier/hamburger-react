import React from 'react'
import { Data } from '../helpers/Data'
import MenuItem from './MenuItem'
import '../styles/Menu.css'



function Menu() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Burgers</h1>
      <div className='menuList'>
        {Data.map((burger, i) => {
          return(
            <MenuItem
            key={i} //item key
            image={burger.image}
            name={burger.name}
            content={burger.content}
            price={burger.price}
          />
          )
        })}
      </div>
    </div>
  )
}

export default Menu
