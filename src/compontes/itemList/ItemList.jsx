import React from 'react'
import './items.css'

const ItemList = () => {
  return (
    <div className='items'>
        <h3>Product</h3>
        <div className='items__info'>
          <p className='items__price'>Precio: $200</p>
          <p className='items__description'>Description</p>
        </div>
        <button className='items__btn-add'>Add Product</button>
    </div>
  )
}

export default ItemList
