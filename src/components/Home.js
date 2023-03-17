import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../assets/banneryeni.jpg'
import '../styles/Home.css'


function Home() {
  return (
    <div className='mainPage' style={{backgroundImage: `url(${Banner})`}}>
      <div className='order' >
          <Link to='/menu'>
            <button>Order</button>
          </Link>
      </div>
    </div>
  )
}

export default Home
