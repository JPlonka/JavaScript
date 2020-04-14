import React from 'react'

function Product(props) {
    return(
        <div className="product">
            <h3>{props.name}</h3>
            <h4>{props.price}$</h4>
            <p>{props.description}</p>
        </div>
    )
}

export default Product