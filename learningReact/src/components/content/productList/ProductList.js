import React from 'react'
import productsData from './vschoolProducts'
import Product from './Product'

function ProductList() {

    const products = productsData.map(prod => 
        <Product 
            key={prod.id}  
            name={prod.name}
            price={prod.price}
            description={prod.description}
        />)

    return(
        <div className="productList">
            {products}
        </div>
    )
}

export default ProductList;