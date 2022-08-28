import React from 'react'

function Shop({ shoptotal }) {
    return (
        <>
            <div style={{ marginTop: "80px" }}>
                {shoptotal.total !== 0 && (
                    <div >
                        {shoptotal.articles.map((elt) => (
                            <div>
                                <h5>Product : {elt.name}</h5>
                                <h5>quantity : {elt.qty}</h5>
                            </div>
                        ))}
                        <h5> total : {shoptotal.total}</h5>
                    </div>)}
            </div>

        </>

    )
}

export default Shop;