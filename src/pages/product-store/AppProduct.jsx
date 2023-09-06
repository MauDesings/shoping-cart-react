import React from 'react'
import ItemList from '../../compontes/itemList/ItemList'
import './appProduct.css';

const AppProduct = ({greeting}) => {
  return (
    <>
        <h2 className='title'>{greeting}</h2>
        <div className='items-content-flex'>
            <ItemList />
            <ItemList />
        </div>
    </>
  )
}

export default AppProduct
