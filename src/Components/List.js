import React from 'react'
import CardComponent from './CardComponent'

function List({ listOfProducts, user }) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-around",
            className: "container",
            marginTop: "80px"
        }}>
            {listOfProducts.map((elt) => (
                <CardComponent key={elt.id} product={elt} user={user} />
            ))}
        </div>
    )
}

export default List