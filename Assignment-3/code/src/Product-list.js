import React from 'react'
import './Product-list.css'
var arrow1='>'
export default function ProductList(props) {
    const {product}=props
  return (
    <div className="product-list">
      <div className='img1'>
        <div className='orange'></div>
      <img src={product.image}/>
      </div>
      <div className='content'>
      <h2>{product.content}</h2>
      <p>{product.description}
        </p>
        <p className='ar'>{arrow1}</p>
    </div>
    </div>
  )
}
