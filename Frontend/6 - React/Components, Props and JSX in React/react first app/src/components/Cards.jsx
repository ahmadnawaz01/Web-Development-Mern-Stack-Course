import React from 'react'
import "./Cards.css"

const Cards = (p) => {
  return (
    <div className='cards' style={{overflow:"hidden"}}>
        <img src="https://buffer.com/resources/content/images/2024/11/free-stock-image-sites.png" width={255}  alt="" />
        <h3>{p.t}</h3>
        <p>{p.d}</p>
    </div>
  )
}

export default Cards
