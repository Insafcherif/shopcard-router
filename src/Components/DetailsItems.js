import React from 'react';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function DetailsItems({ listOfProducts, setShoptotal, shoptotal }) {
    const getId = useParams()
    const Navigate = useNavigate()
    const foundArticle = listOfProducts.find((elt) => elt.id == getId.id)

    const handleClick = () => {
        Navigate("/")
    }
    const handleAddcart = () => {
        const newItem = { ...foundArticle, qty: 1 };
        const existItem = shoptotal.articles.find((elt) => elt.id == newItem.id);
        if (!existItem) {
            setShoptotal({
                articles: [...shoptotal.articles, newItem],
                total: shoptotal.total + newItem.price,
            });
        }
        if (existItem) {
            setShoptotal({
                articles: shoptotal.articles.map((elt) => {
                    if (elt.id == newItem.id) {
                        return { ...elt, qte: elt.qte + 1 };
                    } else {
                        return elt;
                    }
                }), total: shoptotal.total + newItem.price
            })
        }
    }

    return (

        <div style={{ textAlign: "center", marginTop: "80px" }}>
            <img width="100px" src={foundArticle.image} alt={foundArticle.name} />
            <h1> {foundArticle.name} </h1>
            <h2> Price : {foundArticle.price} $ </h2>
            <Button variant="outline-dark" onClick={handleClick}>Back Home</Button>
            <Button variant="outline-success" onClick={handleAddcart}>Add to cart</Button>
        </div>
    )
}

export default DetailsItems;