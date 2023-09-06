import React from 'react'
import ItemList from '../../compontes/itemListContainer/ItemList'
import './appProduct.css';

const AppProduct = () => {
  return (
    <div className='items-content-flex'>
        <ItemList />
        <ItemList />
    </div>
  )
}

export default AppProduct
